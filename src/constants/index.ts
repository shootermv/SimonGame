import Sound from 'react-native-sound';

Sound.setCategory('Playback');
export const SOUNDS = {
  1: new Sound('sound1.mp3', Sound.MAIN_BUNDLE),
  2: new Sound('sound2.mp3', Sound.MAIN_BUNDLE),
  3: new Sound('sound3.mp3', Sound.MAIN_BUNDLE),
  4: new Sound('sound4.mp3', Sound.MAIN_BUNDLE),
};
export const COLORS = {
  1: {disabled: '#f1eb9c', enabled: '#F4EA56'},
  2: {disabled: '#AABAF2', enabled: 'blue'},
  3: {disabled: '#7d7', enabled: '#08ff08'},
  4: {disabled: '#b1a2ca', enabled: '#2e1a47'},
};
