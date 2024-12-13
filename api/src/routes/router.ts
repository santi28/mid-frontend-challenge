import { Router, Request, Response } from "express";
import { JSONOrmService } from "../lib/orm";
import { Property } from "../lib/property.type";

const router = Router();
const orm = new JSONOrmService<Property>("properties.json");

// Obtener propiedades con paginación
router.get(
  "/properties",
  async (req: Request, res: Response): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    if (page < 1 || limit < 1) {
      res.status(400).json({
        error:
          "Invalid pagination parameters. Page and limit must be positive integers.",
      });
      return;
    }

    const properties = await orm.getAll();
    const totalItems = properties.length;
    const totalPages = Math.ceil(totalItems / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    if (startIndex >= totalItems) {
      res.status(404).json({ error: "Page not found." });
      return;
    }

    const paginatedProperties = properties.slice(startIndex, endIndex);

    res.json({
      data: paginatedProperties,
      pagination: {
        current_page: page,
        per_page: limit,
        total_pages: totalPages,
        total_items: totalItems,
      },
    });
  }
);

// Crear una nueva propiedad
router.post(
  "/properties",
  async (req: Request, res: Response): Promise<void> => {
    const newProperty: Omit<Property, "id"> = req.body;

    await orm.create(newProperty);
    res.status(201).json(newProperty);
  }
);

// Obtener una propiedad por ID
router.get(
  "/properties/:id",
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const property = await orm.read(id);

    if (!property) {
      res.status(404).json({ error: "Property not found." });
      return;
    }

    res.json(property);
  }
);

// Actualizar una propiedad por ID
router.put(
  "/properties/:id",
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    const updatedData: Partial<Omit<Property, "id">> = req.body;

    const property = await orm.read(id);

    if (!property) {
      res.status(404).json({ error: "Property not found." });
      return;
    }

    const updatedProperty = { ...property, ...updatedData };
    await orm.update(id, updatedProperty);
    res.json(updatedProperty);
  }
);

// Eliminar una propiedad por ID
router.delete(
  "/properties/:id",
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    const property = await orm.read(id);
    if (!property) {
      res.status(404).json({ error: "Property not found." });
      return;
    }

    await orm.delete(id);
    res.status(204).send();
  }
);

export default router;
