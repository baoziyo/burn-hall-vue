/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

export const filterHtml = (text) => {
  return text.replace(/<[^>]*>/g, '');
}
