const rectWidth = 141;
const rectHeight = 70;

/**
 * 获取顺向异端相连时中间横坐标路径
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
export function getMidXPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  const midX1 = (startX + endX) / 2;
  const midY1 = startY;
  const midX2 = midX1;
  const midY2 = endY;
  return {
    midX1,
    midY1,
    midX2,
    midY2
  };
}

/**
 * 获取顺向异端相连时中间纵坐标路径
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getMidYPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  const midX1 = startX;
  const midY1 = (startY + endY) / 2;
  const midX2 = endX;
  const midY2 = midY1;
  return {
    midX1,
    midY1,
    midX2,
    midY2
  };
}

/**
 * 获取左端连左端时中间路径坐标
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getLLMidPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  let dX = Math.abs(startX - endX) * 2;
  if (dX === 0 || dX < rectWidth * 2) {
    dX = 88;
  }
  if (dX > rectWidth * 2) {
    dX = 88;
  }
  const minX = startX > endX ? endX : startX;
  const midX = minX - dX;
  const midY1 = startY;
  const midY2 = endY;
  return {
    midX,
    midY1,
    midY2
  };
}

/**
 * 获取右端连右端时中间路径坐标
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getRRMidPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  let dX = Math.abs(startX - endX) * 2;
  if (dX === 0 || dX < rectWidth * 2) {
    dX = 88;
  }
  if (dX > rectWidth * 2) {
    dX = 88;
  }
  const maxX = startX > endX ? startX : endX;
  const midX = maxX + dX;
  const midY1 = startY;
  const midY2 = endY;
  return {
    midX,
    midY1,
    midY2
  };
}

/**
 * 获取右端向左端且非直线连接线段（输出四个点坐标）
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getRToLNotStraightLinePath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  const dotX1 = startX + rectWidth / 4;
  const dotY2 = (startY + endY) / 2;
  const dotX3 = endX - rectWidth / 4;
  return {
    dotX1,
    dotY1: startY,
    dotX2: dotX1,
    dotY2,
    dotX3: dotX3,
    dotY3: dotY2,
    dotX4: dotX3,
    dotY4: endY
  };
}

/**
 * 获取左端向右端且非直线连接线段（输出四个点坐标）
 * @argument linkData - 连线数据
 */
function getLToRNotStraightLine(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  const dotX1 = startX - rectWidth / 4;
  const dotY2 = (startY + endY) / 2;
  const dotX3 = endX + rectWidth / 4;
  return {
    dotX1,
    dotY1: startY,
    dotX2: dotX1,
    dotY2,
    dotX3,
    dotY3: dotY2,
    dotX4: dotX3,
    dotY4: endY
  };
}

/**
 * 同侧端点连接： L-L || R-R
 */
export function handleTheSameLinkDot(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  if (dotLink === "left" && dotEndLink === "left") {
    const { midX, midY1, midY2 } = getLLMidPath(startX, startY, endX, endY);
    return `M ${startX},${startY} L ${midX},${midY1} L ${midX},${midY2} L ${endX},${endY}`;
  } else if (dotLink === "right" && dotEndLink === "right") {
    const { midX, midY1, midY2 } = getRRMidPath(startX, startY, endX, endY);
    return `M ${startX},${startY} L ${midX},${midY1} L ${midX},${midY2} L ${endX},${endY}`;
  }
  return "";
}

/**
 * 连接端点不同侧且不为顺向连接直线的
 * @argument linkData - 连线数据
 */
export function handelNotSameLinkDotAndNotStraightLine(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  if (dotLink === "left" && dotEndLink === "right") {
    if (startX < endX) {
      if (startX + rectWidth * 2 < endX) {
        // 起始端口距离终止端口两倍距离时连线(非顺向)
        const {
          dotX1,
          dotY1,
          dotX2,
          dotY2,
          dotX3,
          dotY3,
          dotX4,
          dotY4
        } = getLToRNotStraightLine(startX, startY, endX, endY);

        return `M ${startX},${startY} L ${dotX1},${dotY1} L ${dotX2},${dotY2} L ${dotX3},${dotY3} L ${dotX4},${dotY4} L ${endX},${endY}`;
      } else if (startX + rectWidth * 2 >= endX) {
        // 两者正对(包括偏差)时连线
        let newStartX = startX + rectWidth / 2;
        let newStartY = startY + rectHeight / 2;
        let newEndX = endX - rectWidth / 2;
        let newEndY = endY - rectHeight / 2;

        if (startY > endY) {
          // 起始端口位于终止端口下方时
          newStartY = startY - rectHeight / 2;
          newEndY = endY + rectHeight / 2;
        }

        // 横坐标最小连线误差直线拟合
        const minX = Math.abs(newStartX - newEndX);
        const rangeNum = 3;
        if (minX < rangeNum) {
          newEndX = newStartX;
        }

        const { midX1, midY1, midX2, midY2 } = getMidYPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      }
    }
  } else if (dotLink === "right" && dotEndLink === "left") {
    if (startX > endX) {
      if (endX + rectWidth * 2 < startX) {
        // 起始端口距离终止端口两倍距离时连线(非顺向)
        const {
          dotX1,
          dotY1,
          dotX2,
          dotY2,
          dotX3,
          dotY3,
          dotX4,
          dotY4
        } = getRToLNotStraightLinePath(startX, startY, endX, endY);

        return `M ${startX},${startY} L ${dotX1},${dotY1} L ${dotX2},${dotY2} L ${dotX3},${dotY3} L ${dotX4},${dotY4} L ${endX},${endY}`;
      } else if (endX + rectWidth * 2 >= startX) {
        // 两者正对(包括偏差)时连线
        let newStartX = startX - rectWidth / 2;
        let newStartY = startY + rectHeight / 2;
        let newEndX = endX + rectWidth / 2;
        let newEndY = endY - rectHeight / 2;

        if (startY > endY) {
          // 起始端口位于终止端口下方时
          newStartY = startY - rectHeight / 2;
          newEndY = endY + rectHeight / 2;
        }

        // 横坐标最小连线误差直线拟合
        const minX = Math.abs(newStartX - newEndX);
        const rangeNum = 3;
        if (minX < rangeNum) {
          newEndX = newStartX;
        }

        const { midX1, midY1, midX2, midY2 } = getMidYPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      }
    }
  }
  return "";
}
