export interface BaseOrder {
  id: string;
  quantity: string;

  description: string;
}
export interface ShoeOrder extends BaseOrder {
  tag: "#shoe";
}

export interface ClothesOrder extends BaseOrder {
  tag: "#clothe";
}
