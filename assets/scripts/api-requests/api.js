'use strict';

let dynData = {
  "users": [
    {
      "id": 2,
      "email": "jake@state.farm",
      "lists": [
        {
          "id": 7,
          "category": "HomeInsurance",
          "items": [
            {
              "id": 13,
              "todo": "flood insurance for mr jackson"
            },
            {
              "id": 14,
              "todo": "fire insurance"
            },
            {
              "id": 15,
              "todo": "natual deaster"
            },
            {
              "id": 16,
              "todo": "this coverage rate."
            }
          ]
        },
        {
          "id": 8,
          "category": "Lunch orders",
          "items": [
            {
              "id": 17,
              "todo": "Janis want's Cheeze Pizza"
            },
            {
              "id": 18,
              "todo": "Otter: steamed fish"
            },
            {
              "id": 19,
              "todo": "Kate chicken salad"
            },
            {
              "id": 20,
              "todo": "eric grilled cheese"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "email": "Kate@state.farm",
      "lists": []
    },
    {
      "id": 1,
      "email": "becca@state.farm",
      "lists": [
        {
          "id": 3,
          "category": "Groceries",
          "items": [
            {
              "id": 9,
              "todo": "Olives"
            },
            {
              "id": 10,
              "todo": "lettuce"
            }
          ]
        },
        {
          "id": 4,
          "category": "Beach Supplies",
          "items": [
            {
              "id": 11,
              "todo": "Chairs"
            },
            {
              "id": 12,
              "todo": "sunscreen"
            }
          ]
        },
        {
          "id": 5,
          "category": "Automobiles",
          "items": []
        },
        {
          "id": 6,
          "category": "todo at home",
          "items": []
        }
      ]
    }
  ]
};

module.exports = {
  dynData
};
