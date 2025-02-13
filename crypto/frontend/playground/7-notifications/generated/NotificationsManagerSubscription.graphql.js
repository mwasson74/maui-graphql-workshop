/**
 * @generated SignedSource<<69fabee4bcf3af5d6c737a203ef0e743>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type NotificationsManagerSubscription$variables = {||};
export type NotificationsManagerSubscription$data = {|
  +onNotification: {|
    +notification: ?{|
      +asset: {|
        +hasAlerts: boolean,
      |},
    |},
    +unreadNotifications: number,
  |},
|};
export type NotificationsManagerSubscription = {|
  response: NotificationsManagerSubscription$data,
  variables: NotificationsManagerSubscription$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unreadNotifications",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasAlerts",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NotificationsManagerSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NotificationUpdate",
        "kind": "LinkedField",
        "name": "onNotification",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Notification",
            "kind": "LinkedField",
            "name": "notification",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "NotificationsManagerSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NotificationUpdate",
        "kind": "LinkedField",
        "name": "onNotification",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Notification",
            "kind": "LinkedField",
            "name": "notification",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a9268dd1c267fd63306cb133253a3442",
    "id": null,
    "metadata": {},
    "name": "NotificationsManagerSubscription",
    "operationKind": "subscription",
    "text": "subscription NotificationsManagerSubscription {\n  onNotification {\n    unreadNotifications\n    notification {\n      asset {\n        hasAlerts\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "e5f9bc0ec2a9ba35976a7b025d0a4de8";

module.exports = ((node/*: any*/)/*: GraphQLSubscription<
  NotificationsManagerSubscription$variables,
  NotificationsManagerSubscription$data,
>*/);
