/**
 * @generated SignedSource<<7bb83e098f896a607ff0baa76e48f0a7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { DashboardTickerItemFragment_asset$fragmentType } from "./DashboardTickerItemFragment_asset.graphql";
import type { FragmentType } from "relay-runtime";
declare export opaque type DashboardTickerFragment_query$fragmentType: FragmentType;
export type DashboardTickerFragment_query$data = {|
  +ticker: ?{|
    +nodes: ?$ReadOnlyArray<{|
      +id: string,
      +symbol: string,
      +$fragmentSpreads: DashboardTickerItemFragment_asset$fragmentType,
    |}>,
  |},
  +$fragmentType: DashboardTickerFragment_query$fragmentType,
|};
export type DashboardTickerFragment_query$key = {
  +$data?: DashboardTickerFragment_query$data,
  +$fragmentSpreads: DashboardTickerFragment_query$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardTickerFragment_query",
  "selections": [
    {
      "alias": "ticker",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        },
        {
          "kind": "Literal",
          "name": "order",
          "value": {
            "price": {
              "tradableMarketCapRank": "ASC"
            }
          }
        }
      ],
      "concreteType": "AssetsConnection",
      "kind": "LinkedField",
      "name": "assets",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "symbol",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DashboardTickerItemFragment_asset"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "assets(first:10,order:{\"price\":{\"tradableMarketCapRank\":\"ASC\"}})"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node/*: any*/).hash = "f988bbb911699808bfa7e12b800dedf3";

module.exports = ((node/*: any*/)/*: Fragment<
  DashboardTickerFragment_query$fragmentType,
  DashboardTickerFragment_query$data,
>*/);