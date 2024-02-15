import { Router } from "express"
import { generateFaq } from "../controller/chatController.js"
import { getChat } from "../controller/chatController.js"
import { getAllChat } from "../controller/chatController.js"
import { deleteChat } from "../controller/chatController.js"
import { getCards, updateCard } from "../controller/cardController.js"


const genrateRoute = Router()

genrateRoute.post('/genrate-faq', generateFaq)
genrateRoute.get('/get-faq/:chatRoomId', getChat)
genrateRoute.get('/get-Allfaq/', getAllChat)
genrateRoute.delete('/deleteHistory/:chatRoomId', deleteChat)

genrateRoute.get('/getCards', getCards)
genrateRoute.post('/updateCard', updateCard)


export default genrateRoute