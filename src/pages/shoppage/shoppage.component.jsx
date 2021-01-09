import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { shopSelectorCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({ collection }) => (
  <div className="shop-page">
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: shopSelectorCollections,
});

export default connect(mapStateToProps)(ShopPage);
