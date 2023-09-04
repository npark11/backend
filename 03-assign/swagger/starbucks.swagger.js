/**
 * @swagger
 * /starbucks:
 *   get:
 *     summary: Retrieve all menu
 *     tags: [starbucks]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: Americano
 *                   kcal:
 *                     type: int
 *                     example: 5
 */