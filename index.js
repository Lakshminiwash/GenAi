import "dotenv/config"
import { ChatMistralAI } from "@langchain/mistralai"
import readline from "readline/promises"
import { HumanMessage } from "langchain"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const llm = new ChatMistralAI({
    model: "mistral-large-latest",
})

const message = []

while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ")
    message.push(new HumanMessage(userInput))

    const res = await llm.invoke(message)
    message.push(res)
    console.log(`\x1b[34m[AI]\x1b[0m ${res.content}`)
}

rl.close()



