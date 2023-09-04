/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve all users information
 *     tags: [user]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: user01@email.com
 *                   name:
 *                     type: string
 *                     example: Nick
 *                   phone:
 *                     type: string
 *                     example: 1234567890
 *                   sin:
 *                     type: string
 *                     example: 123-456-789
 *                   prefer:
 *                     type: string
 *                     example: https://github.com/
 */