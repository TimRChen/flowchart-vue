/**
 * 获取随机字符
 * @return {number}
 */
export function getRandomInt(): number {
  const num = Math.random() * 100000;
  return Math.floor(num);
}
