
module.exports = {


    index:function(req,res){
    res.render('home')
    },

    GetCards:function(req,res){
        var Cards = [
            {
                'title' : "Lorem ipsum dolor sit amet",
                'status' : 'Done',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            },
            {
                'title' : "Lorem ipsum dolor sit amet",
                'status' : 'todo',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            },
            {
                'title' : "Lorem ipsum dolor sit amet",
                'status' : 'in progress',
                'description': "Lorem ipsum dolor sit amet, volutpat molestie felis. Morbi hendrerit magna felis, sed pellentesque lorem tincidunt ut"
            }] ;

            res.json(Cards);
        
    }

};
