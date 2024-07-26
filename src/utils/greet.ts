import { getPublishDate } from '@finsweet/ts-utils';
import { format, formatDistance, subDays } from 'date-fns';

/**
 * Greets the user by printing a message in the console.
 * @param name The user's name.
 */
export const greetUser = (name: string) => {
  const publishDate: Date = getPublishDate()?.getDate();

  console.log(`Hello ${name}!`);
  console.log(
    `This website was published on ${formatDistance(subDays(publishDate?.toString(), 3), new Date(), { addSuffix: true })}`
  );
  console.log(
    `This site was last published on ${publishDate?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })}.`
  );
};
