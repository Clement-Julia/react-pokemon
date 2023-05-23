const pokemons = [
    {
      "id": 1,
      "nom": "Bulbizarre",
      "type": ["Plante", "Poison"],
      "pv": 45,
      "stats": {
        "attaque": 49,
        "defense": 49,
        "att_spe": 65,
        "def_spe": 65
      },
      "vitesse": 45
    },
    {
      "id": 2,
      "nom": "Herbizarre",
      "type": ["Plante", "Poison"],
      "pv": 60,
      "stats": {
        "attaque": 62,
        "defense": 63,
        "att_spe": 80,
        "def_spe": 80
      },
      "vitesse": 60
    },
    {
      "id": 3,
      "nom": "Florizarre",
      "type": ["Plante", "Poison"],
      "pv": 80,
      "stats": {
        "attaque": 82,
        "defense": 83,
        "att_spe": 100,
        "def_spe": 100
      },
      "vitesse": 80
    },
    {
      "id": 4,
      "nom": "Salamèche",
      "type": ["Feu"],
      "pv": 39,
      "stats": {
        "attaque": 52,
        "defense": 43,
        "att_spe": 60,
        "def_spe": 50
      },
      "vitesse": 65
    },
    {
      "id": 5,
      "nom": "Reptincel",
      "type": ["Feu"],
      "pv": 58,
      "stats": {
        "attaque": 64,
        "defense": 58,
        "att_spe": 80,
        "def_spe": 65
      },
      "vitesse": 80
    },
    {
      "id": 6,
      "nom": "Dracaufeu",
      "type": ["Feu", "Vol"],
      "pv": 78,
      "stats": {
        "attaque": 84,
        "defense": 78,
        "att_spe": 109,
        "def_spe": 85
      },
      "vitesse": 100
    },
    {
      "id": 7,
      "nom": "Carapuce",
      "type": ["Eau"],
      "pv": 44,
      "stats": {
        "attaque": 48,
        "defense": 65,
        "att_spe": 50,
        "def_spe": 64
      },
      "vitesse": 43
    },
    {
      "id": 8,
      "nom": "Carabaffe",
      "type": ["Eau"],
      "pv": 59,
      "stats": {
        "attaque": 63,
        "defense": 80,
        "att_spe": 65,
        "def_spe": 80
      },
      "vitesse": 58
    },
    {
      "id": 9,
      "nom": "Tortank",
      "type": ["Eau"],
      "pv": 79,
      "stats": {
        "attaque": 83,
        "defense": 100,
        "att_spe": 85,
        "def_spe": 105
      },
      "vitesse": 78
    },
    {
      "id": 10,
      "nom": "Chenipan",
      "type": ["Insecte"],
      "pv": 45,
      "stats": {
        "attaque": 30,
        "defense": 35,
        "att_spe": 20,
        "def_spe": 20
      },
      "vitesse": 45
    },
    {
      "id": 11,
      "nom": "Chrysacier",
      "type": ["Insecte"],
      "pv": 50,
      "stats": {
        "attaque": 20,
        "defense": 55,
        "att_spe": 25,
        "def_spe": 25
      },
      "vitesse": 30
    },
    {
      "id": 12,
      "nom": "Papilusion",
      "type": ["Insecte", "Vol"],
      "pv": 60,
      "stats": {
        "attaque": 45,
        "defense": 50,
        "att_spe": 90,
        "def_spe": 80
      },
      "vitesse": 70
    },
    {
      "id": 13,
      "nom": "Aspicot",
      "type": ["Insecte", "Poison"],
      "pv": 40,
      "stats": {
        "attaque": 35,
        "defense": 30,
        "att_spe": 20,
        "def_spe": 20
      },
      "vitesse": 50
    },
    {
      "id": 14,
      "nom": "Coconfort",
      "type": ["Insecte", "Poison"],
      "pv": 45,
      "stats": {
        "attaque": 25,
        "defense": 50,
        "att_spe": 25,
        "def_spe": 25
      },
      "vitesse": 35
    },
    {
      "id": 15,
      "nom": "Dardargnan",
      "type": ["Insecte", "Poison"],
      "pv": 65,
      "stats": {
        "attaque": 90,
        "defense": 40,
        "att_spe": 45,
        "def_spe": 80
      },
      "vitesse": 75
    },
    {
      "id": 16,
      "nom": "Roucool",
      "type": ["Normal", "Vol"],
      "pv": 40,
      "stats": {
        "attaque": 45,
        "defense": 40,
        "att_spe": 35,
        "def_spe": 35
      },
      "vitesse": 56
    },
    {
      "id": 17,
      "nom": "Roucoups",
      "type": ["Normal", "Vol"],
      "pv": 63,
      "stats": {
        "attaque": 60,
        "defense": 55,
        "att_spe": 50,
        "def_spe": 50
      },
      "vitesse": 71
    },
    {
      "id": 18,
      "nom": "Roucarnage",
      "type": ["Normal", "Vol"],
      "pv": 83,
      "stats": {
        "attaque": 80,
        "defense": 75,
        "att_spe": 70,
        "def_spe": 70
      },
      "vitesse": 101
    },
    {
      "id": 19,
      "nom": "Rattata",
      "type": ["Normal"],
      "pv": 30,
      "stats": {
        "attaque": 56,
        "defense": 35,
        "att_spe": 25,
        "def_spe": 35
      },
      "vitesse": 72
    },
    {
      "id": 20,
      "nom": "Rattatac",
      "type": ["Normal"],
      "pv": 55,
      "stats": {
        "attaque": 81,
        "defense": 60,
        "att_spe": 50,
        "def_spe": 70
      },
      "vitesse": 97
    },
    {
      "id": 21,
      "nom": "Piafabec",
      "type": ["Normal", "Vol"],
      "pv": 40,
      "stats": {
        "attaque": 60,
        "defense": 30,
        "att_spe": 31,
        "def_spe": 31
      },
      "vitesse": 70
    },
    {
      "id": 22,
      "nom": "Rapasdepic",
      "type": ["Normal", "Vol"],
      "pv": 65,
      "stats": {
        "attaque": 90,
        "defense": 65,
        "att_spe": 61,
        "def_spe": 61
      },
      "vitesse": 100
    },
    {
      "id": 23,
      "nom": "Abo",
      "type": ["Poison"],
      "pv": 35,
      "stats": {
        "attaque": 60,
        "defense": 44,
        "att_spe": 40,
        "def_spe": 54
      },
      "vitesse": 55
    },
    {
      "id": 24,
      "nom": "Arbok",
      "type": ["Poison"],
      "pv": 60,
      "stats": {
        "attaque": 85,
        "defense": 69,
        "att_spe": 65,
        "def_spe": 79
      },
      "vitesse": 80
    },
    {
      "id": 25,
      "nom": "Pikachu",
      "type": ["Électrik"],
      "pv": 35,
      "stats": {
        "attaque": 55,
        "defense": 40,
        "att_spe": 50,
        "def_spe": 50
      },
      "vitesse": 90
    },
    {
      "id": 26,
      "nom": "Raichu",
      "type": ["Électrik"],
      "pv": 60,
      "stats": {
        "attaque": 90,
        "defense": 55,
        "att_spe": 90,
        "def_spe": 80
      },
      "vitesse": 110
    },
    {
      "id": 27,
      "nom": "Sabelette",
      "type": ["Sol"],
      "pv": 50,
      "stats": {
        "attaque": 75,
        "defense": 85,
        "att_spe": 20,
        "def_spe": 30
      },
      "vitesse": 40
    },
    {
      "id": 28,
      "nom": "Sablaireau",
      "type": ["Sol"],
      "pv": 75,
      "stats": {
        "attaque": 100,
        "defense": 110,
        "att_spe": 45,
        "def_spe": 55
      },
      "vitesse": 65
    },
    {
      "id": 29,
      "nom": "Nidoran♀",
      "type": ["Poison"],
      "pv": 55,
      "stats": {
        "attaque": 47,
        "defense": 52,
        "att_spe": 40,
        "def_spe": 40
      },
      "vitesse": 41
    },
    {
      "id": 30,
      "nom": "Nidorina",
      "type": ["Poison"],
      "pv": 70,
      "stats": {
        "attaque": 62,
        "defense": 67,
        "att_spe": 55,
        "def_spe": 55
      },
      "vitesse": 56
    },
    {
      "id": 31,
      "nom": "Nidoqueen",
      "type": ["Poison", "Sol"],
      "pv": 90,
      "stats": {
        "attaque": 92,
        "defense": 87,
        "att_spe": 75,
        "def_spe": 85
      },
      "vitesse": 76
    },
    {
      "id": 32,
      "nom": "Nidoran♂",
      "type": ["Poison"],
      "pv": 46,
      "stats": {
        "attaque": 57,
        "defense": 40,
        "att_spe": 40,
        "def_spe": 40
      },
      "vitesse": 50
    },
    {
      "id": 33,
      "nom": "Nidorino",
      "type": ["Poison"],
      "pv": 61,
      "stats": {
        "attaque": 72,
        "defense": 57,
        "att_spe": 55,
        "def_spe": 55
      },
      "vitesse": 65
    },
    {
      "id": 34,
      "nom": "Nidoking",
      "type": ["Poison", "Sol"],
      "pv": 81,
      "stats": {
        "attaque": 102,
        "defense": 77,
        "att_spe": 85,
        "def_spe": 75
      },
      "vitesse": 85
    }
]

export default pokemons