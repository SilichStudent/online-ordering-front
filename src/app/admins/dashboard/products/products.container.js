import { connect } from 'react-redux';
import { Products } from './products.component';
import { loadCategoriesTree } from './actions';

function mapStateToProps(state) {
    const { categoriesTree: { limit, offset, count, error, loading } } = state;
    const list = [
        {
            "id": "5c6c48e4708ebd094ce85f56",
            "createdDate": "2019-02-19T18:20:20.084Z",
            "name": "First",
            "products": [
                {
                    "id": "5c6c4fbfae59c90828f27059",
                    "createdDate": "2019-02-19T18:49:35.415Z",
                    "name": "Valeria Pon",
                    "description": "ponomar@hih.coom",
                    "image": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/23/12/istock-535786572.jpg?w968h681",
                    "categoryId": "5c6c48e4708ebd094ce85f56"
                },
                {
                    "id": "5c6c57827e2e44360ca6d0b4",
                    "createdDate": "2019-02-19T19:22:42.862Z",
                    "name": "Valeria Pon",
                    "description": "ponomar@hih.coom",
                    "image": "https://cdn.shopify.com/s/files/1/2181/5655/products/chuck_crop_2018_web_2000x.png?v=1537888488",
                    "categoryId": "5c6c48e4708ebd094ce85f56"
                }
            ]
        }
    ]

    return { limit, offset, list, count, error, loading };
}

export default connect(mapStateToProps, { loadCategoriesTree })(Products)