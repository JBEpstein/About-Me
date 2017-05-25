'use strict';

var confirmed = confirmed('Are you ready to rock and roll!?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready... but were gonna start anyway.');
}
