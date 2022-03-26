//Register
/**
 * @swagger
 * /api/case-created:
 *   post:
 *     summary: Create case.
 *     tags:
 *        - case
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                creatorAddress:
 *                  type: string
 *                  example : "0x6774A9dA5152d9c4BF9c468f0748d191Ac146719"
 *                launchTokenContractAddress:
 *                  type: string
 *                  example: "0x6774A9dA5152d9c4BF9c468f0748d191Ac146719"
 *                logoLink:
 *                  type: string
 *                  example: "http://localhost:8000/image"
 *           
 *                networkType:
 *                  type: string
 *                  example: "1"
 * 
 *                coins: 
 *                  type: array
 *                  example: [
 *                   {
 *                      contract: "0x6774A9dA5152d9c4BF9c468f0748d191Ac146719",
 *                      symbol: "ETH",
 *                      weight: 30
 *                  }, {
 *                  contract: "0x6774A9dA5152d9c4BF9c468f0748d191Ac146719",
 *                      symbol: "AVL",
 *                      weight: 70}]
 * 
 *               
 *                caseDescription:
 *                  type: string
 *                  example: "Hello here launching a token"
 *                
 *                transactionHash:
 *                  type: string
 *                  example: "Transaction hash goes here"
 *                
 *                transactionResponse:
 *                  type: object
 *                  example: {}
 *                id:
 *                 type: string
 *                 example: "1"
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorized request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


//Register
/**
 * @swagger
 * /api/live-data:
 *   post:
 *     summary: Get Graph of live case.
 *     tags:
 *        - case
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                poolId:
 *                  type: string
 *                  example : "0x6a8c729c9db35c9c5b4ffcbc533aae265c37d8820002000000000000000005c7"
 *                data:
 *                  type: object
 *                  example: {"swaps": [{"id": "0x6c224af2f261a23e467721856db4d57eb0d69d95cc18e8edf329b356d2b837985","poolId": {"id": "0x6a8c729c9db35c9c5b4ffcbc533aae265c37d8820002000000000000000005c7"},"timestamp": 1642540528,"tokenAmountIn": "281.773251","tokenAmountOut": "2328.106772208986","tokenInSym": "USDC","tokenOutSym": "SYNR"},{"id": "0x7bdeb87a3797ad43e7b3fbe6a64d33f0419610a6ad2502dd094e9168a6d0130f1","poolId": {"id": "0x6a8c729c9db35c9c5b4ffcbc533aae265c37d8820002000000000000000005c7"},"timestamp": 1642540616,"tokenAmountIn": "281.773091","tokenAmountOut": "2133.214051886897832956","tokenInSym": "USDC","tokenOutSym": "SYNR"}]}
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorized request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


//Register
/**
 * @swagger
 * /api/get-case/{networkId}:
 *   get:
 *     summary: Get cases in out database for a network.
 *     parameters:
 *      - in: path
 *        name: networkId
 *        schema:
 *          type: number
 *        required: true
 *        description: networkId
 *     tags:
 *        - case
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorized request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */



//Register
/**
 * @swagger
 * /api/get-case-by-id/{id}:
 *   get:
 *     summary: Get cases in out database for a network.
 *     parameters:
 *      - in: path
 *        name: pool
 *        schema:
 *          type: string
 *        required: true
 *        description: pool
 *     tags:
 *        - case
 *     responses:
 *       200:
 *         description: successful
 *       400:
 *         description: invalid arguments, please try again
 *       401:
 *         description: unauthorized request, please check again
 *       403:
 *         description: forbidden request, please check login credentials
 *       404:
 *         description: data not found, please try again
 *       409:
 *         description: conflict happened, we do not allow duplicate entries, please try again.
 *       500:
 *         description: internal server error occurred, please try again
 *
 */


