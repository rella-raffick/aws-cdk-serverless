exports.main = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify(`Konnichiwa sekai ${process.env.TABLE_NAME} kara!`)
    }
}