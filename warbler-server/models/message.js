const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const messageSchema = new Schema ({
    text: {
        type: String,
        required: true,
        maxLength: 160
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

messageSchema.pre('remove', async function(next) {
    try{
        let user = await User.findById(this.user);
        user.message.remove(this.id);
        await user.save();
        return next();

    }catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model('Message', messageSchema);
