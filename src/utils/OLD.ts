// import { greetUser } from '$utils/greet';

import { addListener } from '@finsweet/ts-utils';
import { formatDate } from 'date-fns';

window.Webflow ||= [];
window.Webflow.push(() => {
  $(document).off('submit');

  let numberPlayers: number = 1;
  let numberBays: number = 2;
  let duration: number;
  let eventDate: string;
  let eventTime: string;

  const playersInput = document.querySelector('#Number-Attending') as HTMLInputElement;
  playersInput.value = numberPlayers.toString();

  const hoursInput = document.querySelector('#Number-Hours') as HTMLInputElement;
  const dateInput = document.querySelector('#Event-Date-Time') as HTMLInputElement;
  const timeInput = document.querySelector('#Event-Time') as HTMLInputElement;

  const numberBaysAlert = document.querySelector('#Number-Bays-Text') as HTMLSpanElement;
  numberBaysAlert.textContent = `For ${numberPlayers} players, you will need ${numberBays} bays.`;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playersListener = addListener(playersInput, 'change', () => {
    numberPlayers = playersInput.valueAsNumber;

    if (numberPlayers <= 16) {
      numberBays = 2;
    } else if (numberPlayers > 16 && numberPlayers <= 24) {
      numberBays = 3;
    } else if (numberPlayers > 24 && numberPlayers <= 32) {
      numberBays = 4;
    } else if (numberPlayers > 32 && numberPlayers <= 40) {
      numberBays = 5;
    } else if (numberPlayers > 40 && numberPlayers <= 48) {
      numberBays = 6;
    } else if (numberPlayers > 48 && numberPlayers <= 56) {
      numberBays = 7;
    } else if (numberPlayers > 56 && numberPlayers <= 64) {
      numberBays = 8;
    } else if (numberPlayers > 64 && numberPlayers <= 72) {
      numberBays = 9;
    } else if (numberPlayers > 72 && numberPlayers <= 80) {
      numberBays = 10;
    } else if (numberPlayers > 80 && numberPlayers <= 88) {
      numberBays = 11;
    } else if (numberPlayers > 88 && numberPlayers <= 96) {
      numberBays = 12;
    }

    numberBaysAlert.textContent = `For ${numberPlayers} players, you will need ${numberBays} bays.`;
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hoursListener = addListener(hoursInput, 'change', () => {
    duration = hoursInput.valueAsNumber;
    console.log(`Number of hours: ${duration}`);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dateListener = addListener(dateInput, 'change', () => {
    eventDate = dateInput.valueAsDate;
    console.log(`Date: ${formatDate(eventDate, 'MM/dd/yyyy')}`);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const timeListener = addListener(timeInput, 'change', () => {
    eventTime = timeInput.value;
    console.log(`Time: ${eventTime}`);
  });

  $('#Event-Reservation').submit((evt) => {
    evt.preventDefault();
    console.log($('#Event-Reservation').serializeArray());
  });
});
