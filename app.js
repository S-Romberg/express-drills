const express = require('express')
const cors = require('cors')
var port = process.env.PORT || 3000

var cohorts = [{
    id: 1,
    cohortName: 'g100',
    cohortCode: '17-01-WD-DP',
    studentNum: 28
},
{
    id: 2,
    cohortName: 'g105',
    cohortCode: '17-01-DS-GT',
    studentNum: 24
},
{
    id: 3,
    cohortName: 'g109',
    cohortCode: '17-02-WD-PX',
    studentNum: 30
},
{
    id: 4,
    cohortName: 'g110',
    cohortCode: '17-03-WD-BD',
    studentNum: 29
},
]

function findById(data, id){
    for(let i = 0; i<data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return null
}
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        data: cohorts
    })
})

app.get('/:id', ((req, res) => {
    console.log(req.params['id'])
    var record = findById(cohorts, req.params['id'])
    if(!record){
        response.status = 404;
        response.json({
            error: {
                message: 'No record found!'
            }
        })
    }
    response.json({data: record})
}))

app.listen(port)
