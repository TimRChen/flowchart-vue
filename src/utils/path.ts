const rectWidth = 140;
const rectHeight = 70;

/**
 * 横坐标最小连线误差直线拟合
 * @argument {String} startX 起始点XAxis
 * @argument {String} endY 终点YAxis
 */
export function getFittedEndX(startX: number, endX: number) {
  const minX = Math.abs(startX - endX);
  const rangeNum = 3;
  if (minX < rangeNum) {
    endX = startX;
  }
  return endX;
}

/**
 * 纵坐标最小连线误差直线拟合
 * @argument {String} startY
 * @argument {String} endY
 */
export function getFittedEndY(startY: number, endY: number) {
  const minY = Math.abs(startY - endY);
  const rangeNum = 3;
  if (minY < rangeNum) {
    endY = startY;
  }
  return endY;
}

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
export function getMidYPath(
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
 * 获取上端连上端时中间路径坐标
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getTTMidPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  let dY = Math.abs(startY - endY) * 2;
  if (dY === 0 || dY < rectHeight * 2) {
    dY = 44;
  }
  if (dY > rectHeight * 2) {
    dY = 44;
  }
  const minY = startY > endY ? endY : startY;
  const midY = minY - dY;
  const midX1 = startX;
  const midX2 = endX;
  return {
    midY,
    midX1,
    midX2
  };
}

/**
 * 获取上端连上端时中间路径坐标
 * @argument {String} startX 起始点XAxis
 * @argument {String} startY 起始点YAxis
 * @argument {String} endX 终点XAxis
 * @argument {String} endY 终点YAxis
 */
function getBBMidPath(
  startX: number,
  startY: number,
  endX: number,
  endY: number
) {
  let dY = Math.abs(startY - endY) * 2;
  if (dY === 0 || dY < rectHeight * 2) {
    dY = 44;
  }
  if (dY > rectHeight * 2) {
    dY = 44;
  }
  const maxY = startY > endY ? startY : endY;
  const midY = maxY + dY;
  const midX1 = startX;
  const midX2 = endX;
  return {
    midY,
    midX1,
    midX2
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
 * 同侧端点连接： T-T || B-B
 */
export function handleTheColSameLinkDot(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  let pathData: any = {};
  if (dotLink === "top" && dotEndLink === "top") {
    pathData = getTTMidPath(startX, startY, endX, endY);
  } else if (dotLink === "bottom" && dotEndLink === "bottom") {
    pathData = getBBMidPath(startX, startY, endX, endY);
  }
  if (Object.keys(pathData).length > 0) {
    const { midY, midX1, midX2 } = pathData;
    return `M ${startX},${startY} L ${midX1},${midY} L ${midX2},${midY} L ${endX},${endY}`;
  }
  return "";
}

/**
 * 同侧端点连接： L-L || R-R
 */
export function handleTheSameLinkDot(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  let pathData: any = {};
  if (dotLink === "left" && dotEndLink === "left") {
    pathData = getLLMidPath(startX, startY, endX, endY);
  } else if (dotLink === "right" && dotEndLink === "right") {
    pathData = getRRMidPath(startX, startY, endX, endY);
  }
  if (Object.keys(pathData).length > 0) {
    const { midX, midY1, midY2 } = pathData;
    return `M ${startX},${startY} L ${midX},${midY1} L ${midX},${midY2} L ${endX},${endY}`;
  }
  return "";
}

/**
 * 连接端点为纵向不同侧且节点之间处于同一水平线的
 * @argument linkData - 连线数据
 */
export function handleNotSameLinkDotAndAlongStraightLine(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  if (dotLink === "bottom" && dotEndLink === "top") {
    if (endY < startY) {
      if (startX + rectWidth < endX) {
        const newStartX = startX + rectWidth / 2;
        const newStartY = startY - rectHeight / 2;
        const newEndX = endX - rectWidth / 2;
        let newEndY = endY + rectHeight / 2;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      } else if (startX - rectWidth > endX) {
        const newStartX = startX - rectWidth / 2;
        const newStartY = startY - rectHeight / 2;
        const newEndX = endX + rectWidth / 2;
        let newEndY = endY + rectHeight / 2;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      } else {
        const newStartX = startX;
        const newStartY = startY - rectHeight;
        let newEndX = endX;
        const newEndY = endY + rectHeight;

        // 横坐标最小连线误差直线拟合
        newEndX = getFittedEndX(newStartX, newEndX);

        const { midX1, midY1, midX2, midY2 } = getMidYPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      }
    }
  } else if (dotLink === "top" && dotEndLink === "bottom") {
    if (startY < endY) {
      if (startX + rectWidth < endX) {
        const newStartX = startX + rectWidth / 2;
        const newStartY = startY + rectHeight / 2;
        const newEndX = endX - rectWidth / 2;
        let newEndY = endY - rectHeight / 2;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      } else if (startX - rectWidth > endX) {
        const newStartX = startX - rectWidth / 2;
        const newStartY = startY + rectHeight / 2;
        const newEndX = endX + rectWidth / 2;
        let newEndY = endY - rectHeight / 2;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
      } else {
        const newStartX = startX;
        const newStartY = startY + rectHeight;
        let newEndX = endX;
        const newEndY = endY - rectHeight;

        // 横坐标最小连线误差直线拟合
        newEndX = getFittedEndX(newStartX, newEndX);

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

/**
 * 连接端点不同侧且节点之间处于同一纵向水平线的
 * @argument linkData - 连线数据
 */
export function handelNotSameLinkDotAndAlongColStraightLine(linkData: any) {
  const { dotLink, dotEndLink, startX, startY, endX, endY } = linkData;
  if (dotLink === "left" && dotEndLink === "right") {
    if (startX < endX) {
      if (startX + rectWidth * 2 < endX) {
        // 起始端口距离终止端口两倍距离时连线(非顺向)
        let newStartX = startX + rectWidth;
        let newStartY = startY;
        let newEndX = endX - rectWidth;
        let newEndY = endY;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
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
        newEndX = getFittedEndX(newStartX, newEndX);

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
        let newStartX = startX - rectWidth;
        let newStartY = startY;
        let newEndX = endX + rectWidth;
        let newEndY = endY;

        // 纵坐标最小连线误差直线拟合
        newEndY = getFittedEndY(newStartY, newEndY);

        const { midX1, midY1, midX2, midY2 } = getMidXPath(
          newStartX,
          newStartY,
          newEndX,
          newEndY
        );
        return `M ${newStartX},${newStartY} L ${midX1},${midY1} L ${midX2},${midY2} L ${newEndX},${newEndY}`;
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
        newEndX = getFittedEndX(newStartX, newEndX);

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
