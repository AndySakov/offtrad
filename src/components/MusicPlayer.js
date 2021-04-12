import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import $ from 'jquery'

let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
];

// let next_btn = $(".next-track")
// let prev_btn = $(".prev-track")

let seek_slider = $(".seeker")
// let volume_slider = $(".volume_slider")
let curr_time = $(".current-time")
let total_duration = $(".total-duration")

let audio = document.createElement("audio")



class MusicPlayer extends React.Component {


  constructor(props) {
    super(props)
    this.init()

    this.state = {
      now_playing: "",
      track_index: 0,
      track_art: "",
      track_name: "",
      track_artist: "",
      isPlaying: false,
      updateTimer: 0,
      btn_icon: "play-circle"
    }
  }

  resetValues = () => {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
  }

  loadTrack = (track_index) => {

    let present_track = track_list[track_index]
    clearInterval(this.state.updateTimer);
    this.resetValues();
    audio.src = present_track.path;
    audio.load();

    this.setState({
      track_art: present_track.image,
      track_name: present_track.name,
      track_artist: present_track.artist,
      now_playing: present_track.name,
      updateTimer: setInterval(this.seekUpdate, 1000)
    })
    audio.addEventListener("ended", this.nextTrack);
  }



  init = () => {
    clearInterval()
  }

  // setVolume = () => {
  //   let volume = (volume_slider.value / 100).toPrecision(1)
  //   audio.volume = volume
  // }

  seekTo = () => {
    let seekto = audio.duration * (seek_slider.value / 100);
    audio.currentTime = seekto;
  }

  playPauseTrack = () => {
    if(this.state.isPlaying){
      audio.pause()
      this.setState({isPlaying: false, btn_icon: "play-circle"})
    } else {
      audio.play()
      this.setState({isPlaying: true, btn_icon: "pause-circle"})
    }
  }

  prevTrack = () => {
    this.state.track_index > 0 ? this.setState({track_index: this.state.track_index - 1}) : this.setState({track_index: track_list.length})
    this.loadTrack(this.state.track_index);
    this.playPauseTrack();
  }

  nextTrack = () => {
    this.state.track_index < track_list.length - 1 ? this.setState({track_index: this.state.track_index + 1}) : this.setState({track_index: 0})
    this.loadTrack(this.state.track_index);
    this.playPauseTrack();
  }

  seekUpdate = () => {
    let seekPosition = 0;

    if (!isNaN(audio.duration)) {
      seekPosition = audio.currentTime * (100 / audio.duration);

      seek_slider.value = seekPosition;

      let currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(audio.duration / 60);
      let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }


  render() {
    return (
      <div className="player-wrap-all">

        <div className="player-left">
          <div className="track-cover">
            <img src="https://direct.rhapsody.com/imageserver/images/alb.512924272/500x500.jpg" alt="track-cover"/>
          </div>
          <div className="track-info">
            <div className="track-name"><h6>My Mind</h6></div>
            <div className="artist"><span className="artist-name" >H.Skillz</span></div>
          </div>
        </div>

        {/* <!-- player center --> */}
        <div className="player-center">
            {/* <!-- track buttons --> */}
            <div className="buttons-wrapper">
              <div className="prev-track" onClick={this.prevTrack}>
                <FontAwesomeIcon className="icon icon-control-grey" icon="step-backward" />
              </div>
              <div className="playpause-track" onClick={this.playPauseTrack} style={{cursor: "pointer"}}>
                <FontAwesomeIcon className="icon" icon={this.state.btn_icon} size="2x" />
              </div>
              <div className="next-track" onClick={this.nextTrack}>
                <FontAwesomeIcon className="icon icon-control-grey" icon="step-forward" />
              </div>
            </div>

            {/* <!-- seek slider element --> */}
            <div className="seeker-container">
              <div className="mp-text current-time">01:00</div>
              <input type="range" min="1" max="100" defaultValue="50" className="seeker" onChange={this.seekTo} />
              <div className="mp-text total-duration">2:00</div>
            </div>

          </div>
      </div>
    )
  }
}

export default MusicPlayer
