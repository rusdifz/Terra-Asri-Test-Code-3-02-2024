const express = require('express')
const { calculate_diagonal_sum } = require("./Case 1: Unearthing the Philosopher's Stone")
const { find_common_slot } = require("./Case 2: ️ The Time Wizard's Gambit")
const { isCircularPalindrome } = require("./Case 3:  The Never ending Palindrome Quest")
const { setDataSelfNumber } = require("./Case 4: Unveiling the Secrets of Self-Numbers")
const { emojiToTextWithMapping } = require("./Case 5:  Decrypting the Emoji Code")
const app = express();
const PORT = 4000

app.use(express.json());

app.get('/case_1', async (req,res)=>{
  
  const gridSize = req.query.grid_size  ? req.query.grid_size : res.status(400).send({
    data: null, 
    error: "grid_size must be exist"
  })

  const calculate = calculate_diagonal_sum(gridSize)

  res.status(200).send({
    data: calculate, 
    error: null
  })
  
})

app.post('/case_2', async (req,res)=>{

  const meetings = req.body.meetings ? req.body.meetings : res.status(400).send({
    data: null, 
    error: "meetings must be exist"
  }) 

  const findSlot = find_common_slot(meetings)
  
  res.status(200).send({
    data: findSlot, 
    error: null
  })
  
})

app.get('/case_3', async (req,res)=>{
  
  const wordPalindrome = req.query.word  ? req.query.word : res.status(400).send({
    data: null, 
    error: "word must be exist"
  })

  const checkPalindrome = isCircularPalindrome(wordPalindrome)
  
  res.status(200).send({
    data: checkPalindrome, 
    error: null
  })

})

app.get('/case_4', async (req,res)=>{
  
  const limit = req.query.limit ? req.query.limit : res.status(400).send({
    data: null, 
    error: "limit must be exist"
  })

  const setSelfNumber = setDataSelfNumber(limit)

  res.status(200).send({
    data: setSelfNumber, 
    error: null
  })

})

app.post('/case_5', async (req,res)=>{

  const texts = req.body.text ? req.body.text : res.status(400).send({
    data: null, 
    error: "text must be exist"
  }) 

  const textmapping = emojiToTextWithMapping(texts)
  
  res.status(200).send({
    data: textmapping, 
    error: null
  })
  
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});