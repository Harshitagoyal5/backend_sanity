import {defineField, defineType} from 'sanity'

export default{
    name:'testimonials',
    title:'Testimonials',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imageurl',
            title:'ImgURL',
            type:'image',
            options:{
                hostpot:true,
                metadata: ['palette', 'dimensions', 'location', 'crop'] // Include crop in metadata
            },
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        },
    ]
}