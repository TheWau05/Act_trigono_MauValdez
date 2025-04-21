import { Router } from "express";
import { A_Triangulo, A_Rectangulo, A_Circulo } from "../controller/controller";
import { Dato_Triangulo, Dato_Rectangulo, Dato_Circulo } from "../DB/Datos";

const router = Router();
router.get("/triangulo", (req, res) => {
  const area = A_Triangulo(Dato_Triangulo);
  res.json({ figura: "Triángulo", area });
});

router.get("/rectangulo", (req, res) => {
  const area = A_Rectangulo(Dato_Rectangulo);
  res.json({ figura: "Rectángulo", area });
});

router.get("/circulo", (req, res) => {
  const area = A_Circulo(Dato_Circulo);
  res.json({ figura: "Círculo", area });
});

export default router;
