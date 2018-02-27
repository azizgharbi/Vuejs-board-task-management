
module.exports = {


    index:function(req,res){
    res.render('home')
    },

    GetCards:function(req,res){
        var Cards = [
            {
                'status' : 'Done',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            },
            {
                'status' : 'todo',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            },
            {
                'status' : 'in progress',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            }] ;

            res.json(Cards);
        
    }

};
