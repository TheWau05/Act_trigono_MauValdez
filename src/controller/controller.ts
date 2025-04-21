import { Triangulo, Circulo, Rectangulo } from "../Types/Types";

export function A_Triangulo({ Base, Altura }: Triangulo): number {
  return (Base * Altura) / 2;
}

export function A_Rectangulo({ lado1, lado2 }: Rectangulo): number {
  return lado1 * lado2;
}

export function A_Circulo({ radio }: Circulo): number {
  return Math.PI * radio * radio;
}
