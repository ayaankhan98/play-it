import styles from "./styles/block.module.css"

function getSizeStyle(size) {
  if(size === "XL")return styles.s
  if(size === "L") return styles.m
  if(size === "M") return styles.l
  if(size === "S") return styles.xl
}

function getBlockType(blockType) {
  if(blockType === "Wall") return styles.wall
  if(blockType === "Snake")return styles.snake
  if(blockType === "Food") return styles.food
  if(blockType === "Empty") return styles.empty
}

function Block(props) {
  const size = props.size;
  const blockType = props.blockType;

  let style = styles.block;

  style += " ";
  style += getSizeStyle(size);
  style += " ";
  style += getBlockType(blockType);

  return (
    <div className={style}>
    </div>
  )
}

export default Block;
