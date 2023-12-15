import express from "express";
import contactsController from "../../controllers/contactsController.js.js";
import validateBody from "../../decorators/bodyValidator.js";
import {
  addContactSchema,
  patchContactSchema,
  updateContactSchema,
} from "../../schemas/contactsSchema.js";

import { isEmptyBody, isValidId } from "../../middlewars/index.js";

const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", isValidId, contactsController.getByID);

router.post(
  "/",
  isEmptyBody,
  validateBody(addContactSchema),
  contactsController.add
);

router.delete("/:contactId", isValidId, contactsController.deleteByID);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(updateContactSchema),
  contactsController.update
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBody,
  validateBody(patchContactSchema),
  contactsController.updateFavorite
);

export default router;
