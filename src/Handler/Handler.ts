import { Router } from "express";
import { Dato_Triangulo, Dato_Rectangulo, Dato_Circulo } from "../DB/Datos";
import { A_Triangulo, A_Rectangulo, A_Circulo } from "../controller/controller";

const router = Router();

router.get("/areas", (req, res) => {
  const areaTriangulo = A_Triangulo(Dato_Triangulo);
  const areaRectangulo = A_Rectangulo(Dato_Rectangulo);
  const areaCirculo = A_Circulo(Dato_Circulo);

  res.json({
    triangulo: areaTriangulo,
    rectangulo: areaRectangulo,
    circulo: areaCirculo,
  });
});

export default router;
