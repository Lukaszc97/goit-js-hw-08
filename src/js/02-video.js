import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALST_KEY = 'videoplayer-current-time';
const onPlay = function (data) {
  const seconds = data.seconds;
  localStorage.setItem(LOCALST_KEY, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = JSON.parse(localStorage.getItem(LOCALST_KEY));
player.setCurrentTime(currentTime);
