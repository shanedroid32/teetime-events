import { addListener } from '@finsweet/ts-utils';
import { addDays, format } from 'date-fns';

window.Webflow ||= [];

window.Webflow.push(() => {
  $('form').off('submit');
  $('form').on('submit', function (e) {
    e.preventDefault();
    console.log($('#Event-Registration-Form').serializeArray());
  });

  const baysInTotalText = document.querySelector('#baysInTotal') as HTMLElement;
  const hoursInTotalText = document.querySelector('#hoursInTotal') as HTMLElement;
  const timeInTotalText = document.querySelector('#timeInTotal') as HTMLElement;
  const dayInTotalText = document.querySelector('#dayInTotal') as HTMLElement;

  let finalCost: number;
  const totalTextNumber = document.querySelector('#totalText') as HTMLInputElement;

  let numberOfPlayers: number;
  const numberOfPlayersInput = document.querySelector('#PlayerCount') as HTMLInputElement;

  let numberOfBays: number;
  const numberOfBaysInput = document.querySelector('#numberOfBays') as HTMLInputElement;

  let eventDate: Date;
  const dateInput = document.querySelector('#DateOfEvent') as HTMLInputElement;
  dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYY-MM-dd'));
  dateInput.value = addDays(new Date(), 7).toDateString();

  let eventTime: string;
  const timeInput = document.querySelector('#TimeOfDay') as HTMLInputElement;

  let eventHours: string;
  const hoursInput = document.querySelector('#HoursInput') as HTMLInputElement;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playersListener = addListener(numberOfPlayersInput, 'change', () => {
    numberOfPlayers = numberOfPlayersInput.valueAsNumber;

    if (numberOfPlayers <= 16) {
      numberOfBays = 2;
      dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 7);
    } else if (numberOfPlayers > 16 && numberOfPlayers <= 24) {
      numberOfBays = 3;
      dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 7);
    } else if (numberOfPlayers > 24 && numberOfPlayers <= 32) {
      numberOfBays = 4;
      dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 7);
    } else if (numberOfPlayers > 32 && numberOfPlayers <= 40) {
      numberOfBays = 5;
      dateInput.setAttribute('min', format(addDays(new Date(), 7).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 7);
    } else if (numberOfPlayers > 40 && numberOfPlayers <= 48) {
      numberOfBays = 6;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 48 && numberOfPlayers <= 56) {
      numberOfBays = 7;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 56 && numberOfPlayers <= 64) {
      numberOfBays = 8;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 64 && numberOfPlayers <= 72) {
      numberOfBays = 9;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 72 && numberOfPlayers <= 80) {
      numberOfBays = 10;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 80 && numberOfPlayers <= 88) {
      numberOfBays = 11;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 88 && numberOfPlayers <= 96) {
      numberOfBays = 12;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 96 && numberOfPlayers <= 104) {
      numberOfBays = 13;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 104 && numberOfPlayers <= 112) {
      numberOfBays = 14;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 112 && numberOfPlayers <= 120) {
      numberOfBays = 14;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 120 && numberOfPlayers <= 128) {
      numberOfBays = 15;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 128 && numberOfPlayers <= 136) {
      numberOfBays = 16;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 136 && numberOfPlayers <= 144) {
      numberOfBays = 17;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 144 && numberOfPlayers <= 152) {
      numberOfBays = 18;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    } else if (numberOfPlayers > 152 && numberOfPlayers <= 160) {
      numberOfBays = 19;
      dateInput.setAttribute('min', format(addDays(new Date(), 14).toDateString(), 'YYY-MM-dd'));
      dateInput.valueAsDate = addDays(new Date(), 14);
    }

    numberOfBaysInput.value = numberOfBays.toString();
    baysInTotalText.innerHTML = numberOfBays.toString();
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dateListener = addListener(dateInput, 'change', () => {
    const timeOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const milliseconds = dateInput.valueAsNumber + timeOffset;
    eventDate = new Date(milliseconds);
    console.log(eventDate);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const timeListener = addListener(timeInput, 'change', () => {
    eventTime = timeInput.value;
    timeInTotalText.innerHTML = eventTime;
  });

  const calcluatePricing = () => {
    const dayOfWeek = eventDate.getDay();

    if (numberOfBays <= 2) {
      // Do this for 2 bays

      if (
        dayOfWeek === 0 ||
        dayOfWeek === 1 ||
        dayOfWeek === 2 ||
        dayOfWeek === 3 ||
        dayOfWeek === 4
      ) {
        finalCost = parseInt(eventHours) * numberOfBays * 30;
        totalTextNumber.innerHTML = finalCost.toString();
      } else if (dayOfWeek === 5 || dayOfWeek === 6) {
        finalCost = parseInt(eventHours) * numberOfBays * 50;
        totalTextNumber.innerHTML = finalCost.toString();
      }
    } else {
      // Do this for 3+ bays
      // $80/hour/bay
      // Monday gets 20% off
      if (dayOfWeek === 1) {
        const num = parseInt(eventHours) * numberOfBays * 80;
        const percentageOff: number = num * 0.2;
        finalCost = num - percentageOff;
        totalTextNumber.innerHTML = finalCost.toString();
      }
      finalCost = parseInt(eventHours) * numberOfBays * 80;
      totalTextNumber.innerHTML = finalCost.toString();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hoursListener = addListener(hoursInput, 'change', () => {
    eventHours = hoursInput.value;
    hoursInTotalText.innerHTML = eventHours.toString();
    console.log(eventDate);
    dayInTotalText.innerHTML = format(eventDate, 'EEEE');
    calcluatePricing();
  });
});
