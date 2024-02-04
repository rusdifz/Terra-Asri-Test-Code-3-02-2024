## Installation
```bash
$ npm install
```

## Running the app

```bash
$ node index.js

# Run Case 1: Unearthing the Philosopher's Stone
$ curl --location 'http://localhost:4000/case_1?grid_size=5'

# Run Case 2: ️ The Time Wizard's Gambit
$ curl --location 'http://localhost:4000/case_2' \
    --data '{
        "meetings": [
            [[9,12],[14,16]],
            [[10,12],[15,17]],
            [[11,13],[16,18]]
        ]
    }'

# Run Case 3:  The Never ending Palindrome Quest
$ curl --location 'http://localhost:4000/case_3?word=A man, a plan, a canal. Panama'

# Run Case 4: Unveiling the Secrets of Self-Numbers
$ curl --location 'http://localhost:4000/case_4?limit=500'

# Run Case 5:  Decrypting the Emoji Code
$ 