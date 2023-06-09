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
    },
    {
        "id": 35,
        "nom": "Mélofée",
        "type": ["Normal"],
        "pv": 70,
        "stats": {
            "attaque": 45,
            "defense": 48,
            "att_spe": 60,
            "def_spe": 65
        },
        "vitesse": 35
    },
    {
        "id": 36,
        "nom": "Mélodelfe",
        "type": ["Normal"],
        "pv": 95,
        "stats": {
            "attaque": 70,
            "defense": 73,
            "att_spe": 85,
            "def_spe": 90
        },
        "vitesse": 60
    },
    {
        "id": 37,
        "nom": "Goupix",
        "type": ["Feu"],
        "pv": 38,
        "stats": {
            "attaque": 41,
            "defense": 40,
            "att_spe": 50,
            "def_spe": 65
        },
        "vitesse": 65
    },
    {
        "id": 38,
        "nom": "Feunard",
        "type": ["Feu"],
        "pv": 73,
        "stats": {
            "attaque": 76,
            "defense": 75,
            "att_spe": 81,
            "def_spe": 100
        },
        "vitesse": 100
    },
    {
        "id": 39,
        "nom": "Rondoudou",
        "type": ["Normal", "Fée"],
        "pv": 115,
        "stats": {
            "attaque": 45,
            "defense": 20,
            "att_spe": 45,
            "def_spe": 25
        },
        "vitesse": 20
    },
    {
        "id": 40,
        "nom": "Grodoudou",
        "type": ["Normal", "Fée"],
        "pv": 140,
        "stats": {
            "attaque": 70,
            "defense": 45,
            "att_spe": 75,
            "def_spe": 50
        },
        "vitesse": 45
    },
    {
        "id": 41,
        "nom": "Nosferapti",
        "type": ["Poison", "Vol"],
        "pv": 40,
        "stats": {
            "attaque": 45,
            "defense": 35,
            "att_spe": 30,
            "def_spe": 40
        },
        "vitesse": 55
    },
    {
        "id": 42,
        "nom": "Nosferalto",
        "type": ["Poison", "Vol"],
        "pv": 75,
        "stats": {
            "attaque": 80,
            "defense": 70,
            "att_spe": 65,
            "def_spe": 75
        },
        "vitesse": 90
    },
    {
        "id": 43,
        "nom": "Mystherbe",
        "type": ["Plante", "Poison"],
        "pv": 50,
        "stats": {
            "attaque": 75,
            "defense": 35,
            "att_spe": 70,
            "def_spe": 30
        },
        "vitesse": 40
    },
    {
        "id": 44,
        "nom": "Ortide",
        "type": ["Plante", "Poison"],
        "pv": 65,
        "stats": {
            "attaque": 90,
            "defense": 50,
            "att_spe": 85,
            "def_spe": 45
        },
        "vitesse": 55
    },
    {
        "id": 45,
        "nom": "Rafflesia",
        "type": ["Plante", "Poison"],
        "pv": 80,
        "stats": {
            "attaque": 105,
            "defense": 65,
            "att_spe": 100,
            "def_spe": 70
        },
        "vitesse": 70
    },
    {
        "id": 46,
        "nom": "Paras",
        "type": ["Insecte", "Plante"],
        "pv": 35,
        "stats": {
            "attaque": 70,
            "defense": 55,
            "att_spe": 45,
            "def_spe": 55
        },
        "vitesse": 25
    },
    {
        "id": 47,
        "nom": "Parasect",
        "type": ["Insecte", "Plante"],
        "pv": 60,
        "stats": {
            "attaque": 95,
            "defense": 80,
            "att_spe": 60,
            "def_spe": 80
        },
        "vitesse": 30
    },
    {
        "id": 48,
        "nom": "Mimitoss",
        "type": ["Insecte", "Poison"],
        "pv": 60,
        "stats": {
            "attaque": 55,
            "defense": 50,
            "att_spe": 40,
            "def_spe": 55
        },
        "vitesse": 45
    },
    {
        "id": 49,
        "nom": "Aéromite",
        "type": ["Insecte", "Poison"],
        "pv": 70,
        "stats": {
            "attaque": 65,
            "defense": 60,
            "att_spe": 90,
            "def_spe": 75
        },
        "vitesse": 90
    },
    {
        "id": 50,
        "nom": "Taupiqueur",
        "type": ["Sol"],
        "pv": 10,
        "stats": {
            "attaque": 55,
            "defense": 25,
            "att_spe": 35,
            "def_spe": 45
        },
        "vitesse": 95
    },
    {
        "id": 51,
        "nom": "Triopikeur",
        "type": ["Sol"],
        "pv": 35,
        "stats": {
            "attaque": 100,
            "defense": 50,
            "att_spe": 50,
            "def_spe": 70
        },
        "vitesse": 120
    },
    {
        "id": 52,
        "nom": "Miaouss",
        "type": ["Normal"],
        "pv": 40,
        "stats": {
            "attaque": 45,
            "defense": 35,
            "att_spe": 40,
            "def_spe": 40
        },
        "vitesse": 90
    },
    {
        "id": 53,
        "nom": "Persian",
        "type": ["Normal"],
        "pv": 65,
        "stats": {
            "attaque": 70,
            "defense": 60,
            "att_spe": 65,
            "def_spe": 65
        },
        "vitesse": 115
    },
    {
        "id": 54,
        "nom": "Psykokwak",
        "type": ["Eau"],
        "pv": 50,
        "stats": {
            "attaque": 52,
            "defense": 48,
            "att_spe": 65,
            "def_spe": 50
        },
        "vitesse": 55
    },
    {
        "id": 55,
        "nom": "Akwakwak",
        "type": ["Eau"],
        "pv": 80,
        "stats": {
            "attaque": 82,
            "defense": 78,
            "att_spe": 95,
            "def_spe": 80
        },
        "vitesse": 85
    },
    {
        "id": 56,
        "nom": "Férosinge",
        "type": ["Combat"],
        "pv": 40,
        "stats": {
            "attaque": 80,
            "defense": 35,
            "att_spe": 35,
            "def_spe": 45
        },
        "vitesse": 70
    },
    {
        "id": 57,
        "nom": "Colossinge",
        "type": ["Combat"],
        "pv": 65,
        "stats": {
            "attaque": 105,
            "defense": 60,
            "att_spe": 60,
            "def_spe": 70
        },
        "vitesse": 95
    },
    {
        "id": 58,
        "nom": "Caninos",
        "type": ["Feu"],
        "pv": 55,
        "stats": {
            "attaque": 70,
            "defense": 45,
            "att_spe": 70,
            "def_spe": 50
        },
        "vitesse": 60
    },
    {
        "id": 59,
        "nom": "Arcanin",
        "type": ["Feu"],
        "pv": 90,
        "stats": {
            "attaque": 110,
            "defense": 80,
            "att_spe": 100,
            "def_spe": 80
        },
        "vitesse": 95
    },
    {
        "id": 60,
        "nom": "Ptitard",
        "type": ["Eau"],
        "pv": 40,
        "stats": {
            "attaque": 50,
            "defense": 40,
            "att_spe": 40,
            "def_spe": 40
        },
        "vitesse": 90
    },
    {
        "id": 61,
        "nom": "Têtarte",
        "type": ["Eau"],
        "pv": 65,
        "stats": {
            "attaque": 65,
            "defense": 65,
            "att_spe": 50,
            "def_spe": 50
        },
        "vitesse": 90
    },
    {
        "id": 62,
        "nom": "Tartard",
        "type": ["Eau", "Combat"],
        "pv": 90,
        "stats": {
            "attaque": 95,
            "defense": 95,
            "att_spe": 70,
            "def_spe": 90
        },
        "vitesse": 70
    },
    {
        "id": 63,
        "nom": "Abra",
        "type": ["Psy"],
        "pv": 25,
        "stats": {
            "attaque": 20,
            "defense": 15,
            "att_spe": 105,
            "def_spe": 55
        },
        "vitesse": 90
    },
    {
        "id": 64,
        "nom": "Kadabra",
        "type": ["Psy"],
        "pv": 40,
        "stats": {
            "attaque": 35,
            "defense": 30,
            "att_spe": 120,
            "def_spe": 70
        },
        "vitesse": 105
    },
    {
        "id": 65,
        "nom": "Alakazam",
        "type": ["Psy"],
        "pv": 55,
        "stats": {
            "attaque": 50,
            "defense": 45,
            "att_spe": 135,
            "def_spe": 95
        },
        "vitesse": 120
    },
    {
        "id": 66,
        "nom": "Machoc",
        "type": ["Combat"],
        "pv": 70,
        "stats": {
            "attaque": 80,
            "defense": 50,
            "att_spe": 35,
            "def_spe": 35
        },
        "vitesse": 35
    },
    {
        "id": 67,
        "nom": "Machopeur",
        "type": ["Combat"],
        "pv": 80,
        "stats": {
            "attaque": 100,
            "defense": 70,
            "att_spe": 50,
            "def_spe": 60
        },
        "vitesse": 45
    },
    {
        "id": 68,
        "nom": "Mackogneur",
        "type": ["Combat"],
        "pv": 90,
        "stats": {
            "attaque": 130,
            "defense": 80,
            "att_spe": 65,
            "def_spe": 85
        },
        "vitesse": 55
    },
    {
        "id": 69,
        "nom": "Chétiflor",
        "type": ["Plante", "Poison"],
        "pv": 50,
        "stats": {
            "attaque": 75,
            "defense": 35,
            "att_spe": 70,
            "def_spe": 30
        },
        "vitesse": 40
    },
    {
        "id": 70,
        "nom": "Boustiflor",
        "type": ["Plante", "Poison"],
        "pv": 65,
        "stats": {
            "attaque": 90,
            "defense": 50,
            "att_spe": 85,
            "def_spe": 45
        },
        "vitesse": 55
    },
    {
        "id": 71,
        "nom": "Empiflor",
        "type": ["Plante", "Poison"],
        "pv": 80,
        "stats": {
            "attaque": 105,
            "defense": 65,
            "att_spe": 100,
            "def_spe": 70
        },
        "vitesse": 70
    },
    {
        "id": 72,
        "nom": "Tentacool",
        "type": ["Eau", "Poison"],
        "pv": 40,
        "stats": {
            "attaque": 40,
            "defense": 35,
            "att_spe": 50,
            "def_spe": 100
        },
        "vitesse": 70
    },
    {
        "id": 73,
        "nom": "Tentacruel",
        "type": ["Eau", "Poison"],
        "pv": 80,
        "stats": {
            "attaque": 70,
            "defense": 65,
            "att_spe": 80,
            "def_spe": 120
        },
        "vitesse": 100
    },
    {
        "id": 74,
        "nom": "Racaillou",
        "type": ["Roche", "Sol"],
        "pv": 40,
        "stats": {
            "attaque": 80,
            "defense": 100,
            "att_spe": 30,
            "def_spe": 30
        },
        "vitesse": 20
    },
    {
        "id": 75,
        "nom": "Gravalanch",
        "type": ["Roche", "Sol"],
        "pv": 55,
        "stats": {
            "attaque": 95,
            "defense": 115,
            "att_spe": 45,
            "def_spe": 45
        },
        "vitesse": 35
    },
    {
        "id": 76,
        "nom": "Grolem",
        "type": ["Roche", "Sol"],
        "pv": 80,
        "stats": {
            "attaque": 120,
            "defense": 130,
            "att_spe": 55,
            "def_spe": 65
        },
        "vitesse": 45
    },
    {
        "id": 77,
        "nom": "Ponyta",
        "type": ["Feu"],
        "pv": 50,
        "stats": {
            "attaque": 85,
            "defense": 55,
            "att_spe": 65,
            "def_spe": 65
        },
        "vitesse": 90
    },
    {
        "id": 78,
        "nom": "Galopa",
        "type": ["Feu"],
        "pv": 65,
        "stats": {
            "attaque": 100,
            "defense": 70,
            "att_spe": 80,
            "def_spe": 80
        },
        "vitesse": 105
    },
    {
        "id": 79,
        "nom": "Ramoloss",
        "type": ["Eau", "Psy"],
        "pv": 90,
        "stats": {
            "attaque": 65,
            "defense": 65,
            "att_spe": 40,
            "def_spe": 40
        },
        "vitesse": 15
    },
    {
        "id": 80,
        "nom": "Flagadoss",
        "type": ["Eau", "Psy"],
        "pv": 95,
        "stats": {
            "attaque": 75,
            "defense": 110,
            "att_spe": 100,
            "def_spe": 80
        },
        "vitesse": 30
    },
    {
        "id": 81,
        "nom": "Magnéti",
        "type": ["Électrik", "Acier"],
        "pv": 25,
        "stats": {
            "attaque": 35,
            "defense": 70,
            "att_spe": 95,
            "def_spe": 55
        },
        "vitesse": 45
    },
    {
        "id": 82,
        "nom": "Magnéton",
        "type": ["Électrik", "Acier"],
        "pv": 50,
        "stats": {
            "attaque": 60,
            "defense": 95,
            "att_spe": 120,
            "def_spe": 70
        },
        "vitesse": 70
    },
    {
        "id": 83,
        "nom": "Canarticho",
        "type": ["Normal", "Vol"],
        "pv": 52,
        "stats": {
            "attaque": 90,
            "defense": 55,
            "att_spe": 58,
            "def_spe": 62
        },
        "vitesse": 60
    },
    {
        "id": 84,
        "nom": "Doduo",
        "type": ["Normal", "Vol"],
        "pv": 35,
        "stats": {
            "attaque": 85,
            "defense": 45,
            "att_spe": 35,
            "def_spe": 35
        },
        "vitesse": 75
    },
    {
        "id": 85,
        "nom": "Dodrio",
        "type": ["Normal", "Vol"],
        "pv": 60,
        "stats": {
            "attaque": 110,
            "defense": 70,
            "att_spe": 60,
            "def_spe": 60
        },
        "vitesse": 110
    },
    {
        "id": 86,
        "nom": "Otaria",
        "type": ["Eau"],
        "pv": 65,
        "stats": {
            "attaque": 45,
            "defense": 55,
            "att_spe": 45,
            "def_spe": 70
        },
        "vitesse": 45
    },
    {
        "id": 87,
        "nom": "Lamantine",
        "type": ["Eau", "Glace"],
        "pv": 90,
        "stats": {
            "attaque": 70,
            "defense": 80,
            "att_spe": 70,
            "def_spe": 95
        },
        "vitesse": 70
    },
    {
        "id": 88,
        "nom": "Tadmorv",
        "type": ["Poison"],
        "pv": 80,
        "stats": {
            "attaque": 80,
            "defense": 50,
            "att_spe": 40,
            "def_spe": 50
        },
        "vitesse": 25
    },
    {
        "id": 89,
        "nom": "Grotadmorv",
        "type": ["Poison"],
        "pv": 105,
        "stats": {
            "attaque": 105,
            "defense": 75,
            "att_spe": 65,
            "def_spe": 100
        },
        "vitesse": 50
    },
    {
        "id": 90,
        "nom": "Kokiyas",
        "type": ["Eau"],
        "pv": 30,
        "stats": {
            "attaque": 65,
            "defense": 100,
            "att_spe": 45,
            "def_spe": 25
        },
        "vitesse": 40
    },
    {
        "id": 91,
        "nom": "Crustabri",
        "type": ["Eau", "Glace"],
        "pv": 50,
        "stats": {
            "attaque": 95,
            "defense": 180,
            "att_spe": 85,
            "def_spe": 45
        },
        "vitesse": 70
    },
    {
        "id": 92,
        "nom": "Fantominus",
        "type": ["Spectre", "Poison"],
        "pv": 30,
        "stats": {
            "attaque": 35,
            "defense": 30,
            "att_spe": 100,
            "def_spe": 35
        },
        "vitesse": 80
    },
    {
        "id": 93,
        "nom": "Spectrum",
        "type": ["Spectre", "Poison"],
        "pv": 45,
        "stats": {
            "attaque": 50,
            "defense": 45,
            "att_spe": 115,
            "def_spe": 55
        },
        "vitesse": 95
    },
    {
        "id": 94,
        "nom": "Ectoplasma",
        "type": ["Spectre", "Poison"],
        "pv": 60,
        "stats": {
            "attaque": 65,
            "defense": 60,
            "att_spe": 130,
            "def_spe": 75
        },
        "vitesse": 110
    },
    {
        "id": 95,
        "nom": "Onix",
        "type": ["Roche", "Sol"],
        "pv": 35,
        "stats": {
            "attaque": 45,
            "defense": 160,
            "att_spe": 30,
            "def_spe": 45
        },
        "vitesse": 70
    },
    {
        "id": 96,
        "nom": "Soporifik",
        "type": ["Psy"],
        "pv": 60,
        "stats": {
            "attaque": 48,
            "defense": 45,
            "att_spe": 43,
            "def_spe": 90
        },
        "vitesse": 42
    },
    {
        "id": 97,
        "nom": "Hypnomade",
        "type": ["Psy"],
        "pv": 85,
        "stats": {
            "attaque": 73,
            "defense": 70,
            "att_spe": 73,
            "def_spe": 115
        },
        "vitesse": 67
    },
    {
        "id": 98,
        "nom": "Krabby",
        "type": ["Eau"],
        "pv": 30,
        "stats": {
            "attaque": 105,
            "defense": 90,
            "att_spe": 25,
            "def_spe": 25
        },
        "vitesse": 50
    },
    {
        "id": 99,
        "nom": "Krabboss",
        "type": ["Eau"],
        "pv": 55,
        "stats": {
            "attaque": 130,
            "defense": 115,
            "att_spe": 50,
            "def_spe": 50
        },
        "vitesse": 75
    },
    {
        "id": 100,
        "nom": "Voltorbe",
        "type": ["Électrik"],
        "pv": 40,
        "stats": {
            "attaque": 30,
            "defense": 50,
            "att_spe": 55,
            "def_spe": 55
        },
        "vitesse": 100
    },
    {
        "id": 101,
        "nom": "Électrode",
        "type": ["Électrik"],
        "pv": 60,
        "stats": {
            "attaque": 50,
            "defense": 70,
            "att_spe": 80,
            "def_spe": 80
        },
        "vitesse": 140
    },
    {
        "id": 102,
        "nom": "Noeunoeuf",
        "type": ["Plante", "Psy"],
        "pv": 60,
        "stats": {
            "attaque": 40,
            "defense": 80,
            "att_spe": 60,
            "def_spe": 45
        },
        "vitesse": 40
    },
    {
        "id": 103,
        "nom": "Noadkoko",
        "type": ["Plante", "Psy"],
        "pv": 95,
        "stats": {
            "attaque": 95,
            "defense": 85,
            "att_spe": 125,
            "def_spe": 65
        },
        "vitesse": 55
    },
    {
        "id": 104,
        "nom": "Osselait",
        "type": ["Sol"],
        "pv": 50,
        "stats": {
            "attaque": 50,
            "defense": 95,
            "att_spe": 40,
            "def_spe": 50
        },
        "vitesse": 35
    },
    {
        "id": 105,
        "nom": "Ossatueur",
        "type": ["Sol"],
        "pv": 60,
        "stats": {
            "attaque": 80,
            "defense": 110,
            "att_spe": 50,
            "def_spe": 80
        },
        "vitesse": 45
    },
    {
        "id": 106,
        "nom": "Kicklee",
        "type": ["Combat"],
        "pv": 50,
        "stats": {
            "attaque": 120,
            "defense": 53,
            "att_spe": 35,
            "def_spe": 110
        },
        "vitesse": 87
    },
    {
        "id": 107,
        "nom": "Tygnon",
        "type": ["Combat"],
        "pv": 50,
        "stats": {
            "attaque": 105,
            "defense": 79,
            "att_spe": 35,
            "def_spe": 110
        },
        "vitesse": 76
    },
    {
        "id": 108,
        "nom": "Excelangue",
        "type": ["Normal"],
        "pv": 90,
        "stats": {
            "attaque": 55,
            "defense": 75,
            "att_spe": 60,
            "def_spe": 75
        },
        "vitesse": 30
    },
    {
        "id": 109,
        "nom": "Smogo",
        "type": ["Poison"],
        "pv": 40,
        "stats": {
            "attaque": 65,
            "defense": 95,
            "att_spe": 60,
            "def_spe": 45
        },
        "vitesse": 35
    },
    {
        "id": 110,
        "nom": "Smogogo",
        "type": ["Poison"],
        "pv": 65,
        "stats": {
            "attaque": 90,
            "defense": 120,
            "att_spe": 85,
            "def_spe": 70
        },
        "vitesse": 60
    },
    {
        "id": 111,
        "nom": "Rhinocorne",
        "type": ["Sol", "Roche"],
        "pv": 80,
        "stats": {
            "attaque": 85,
            "defense": 95,
            "att_spe": 30,
            "def_spe": 30
        },
        "vitesse": 25
    },
    {
        "id": 112,
        "nom": "Rhinoféros",
        "type": ["Sol", "Roche"],
        "pv": 105,
        "stats": {
            "attaque": 130,
            "defense": 120,
            "att_spe": 45,
            "def_spe": 45
        },
        "vitesse": 40
    },
    {
        "id": 113,
        "nom": "Leveinard",
        "type": ["Normal"],
        "pv": 250,
        "stats": {
            "attaque": 5,
            "defense": 5,
            "att_spe": 35,
            "def_spe": 105
        },
        "vitesse": 50
    },
    {
        "id": 114,
        "nom": "Saquedeneu",
        "type": ["Plante"],
        "pv": 65,
        "stats": {
            "attaque": 55,
            "defense": 115,
            "att_spe": 100,
            "def_spe": 40
        },
        "vitesse": 60
    },
    {
        "id": 115,
        "nom": "Kangourex",
        "type": ["Normal"],
        "pv": 105,
        "stats": {
            "attaque": 95,
            "defense": 80,
            "att_spe": 40,
            "def_spe": 80
        },
        "vitesse": 90
    },
    {
        "id": 116,
        "nom": "Hypotrempe",
        "type": ["Eau"],
        "pv": 30,
        "stats": {
            "attaque": 40,
            "defense": 70,
            "att_spe": 70,
            "def_spe": 25
        },
        "vitesse": 60
    },
    {
        "id": 117,
        "nom": "Hypocéan",
        "type": ["Eau"],
        "pv": 55,
        "stats": {
            "attaque": 65,
            "defense": 95,
            "att_spe": 95,
            "def_spe": 45
        },
        "vitesse": 85
    },
    {
        "id": 118,
        "nom": "Poissirène",
        "type": ["Eau"],
        "pv": 45,
        "stats": {
            "attaque": 67,
            "defense": 60,
            "att_spe": 35,
            "def_spe": 50
        },
        "vitesse": 63
    },
    {
        "id": 119,
        "nom": "Poissoroy",
        "type": ["Eau"],
        "pv": 80,
        "stats": {
            "attaque": 92,
            "defense": 65,
            "att_spe": 65,
            "def_spe": 80
        },
        "vitesse": 68
    },
    {
        "id": 120,
        "nom": "Stari",
        "type": ["Eau", "Psy"],
        "pv": 30,
        "stats": {
            "attaque": 45,
            "defense": 55,
            "att_spe": 70,
            "def_spe": 55
        },
        "vitesse": 85
    },
    {
        "id": 121,
        "nom": "Staross",
        "type": ["Eau", "Psy"],
        "pv": 60,
        "stats": {
            "attaque": 75,
            "defense": 85,
            "att_spe": 100,
            "def_spe": 85
        },
        "vitesse": 115
    },
    {
        "id": 122,
        "nom": "M. Mime",
        "type": ["Psy", "Fée"],
        "pv": 40,
        "stats": {
            "attaque": 45,
            "defense": 65,
            "att_spe": 100,
            "def_spe": 120
        },
        "vitesse": 90
    },
    {
        "id": 123,
        "nom": "Insécateur",
        "type": ["Insecte", "Vol"],
        "pv": 70,
        "stats": {
            "attaque": 110,
            "defense": 80,
            "att_spe": 55,
            "def_spe": 80
        },
        "vitesse": 105
    },
    {
        "id": 124,
        "nom": "Lippoutou",
        "type": ["Glace", "Psy"],
        "pv": 65,
        "stats": {
            "attaque": 50,
            "defense": 35,
            "att_spe": 115,
            "def_spe": 95
        },
        "vitesse": 95
    },
    {
        "id": 125,
        "nom": "Élektek",
        "type": ["Électrik"],
        "pv": 65,
        "stats": {
            "attaque": 83,
            "defense": 57,
            "att_spe": 95,
            "def_spe": 85
        },
        "vitesse": 105
    },
    {
        "id": 126,
        "nom": "Magmar",
        "type": ["Feu"],
        "pv": 65,
        "stats": {
            "attaque": 95,
            "defense": 57,
            "att_spe": 100,
            "def_spe": 85
        },
        "vitesse": 93
    },
    {
        "id": 127,
        "nom": "Scarabrute",
        "type": ["Insecte"],
        "pv": 65,
        "stats": {
            "attaque": 125,
            "defense": 100,
            "att_spe": 55,
            "def_spe": 70
        },
        "vitesse": 85
    },
    {
        "id": 128,
        "nom": "Tauros",
        "type": ["Normal"],
        "pv": 75,
        "stats": {
            "attaque": 100,
            "defense": 95,
            "att_spe": 40,
            "def_spe": 70
        },
        "vitesse": 110
    },
    {
        "id": 129,
        "nom": "Magicarpe",
        "type": ["Eau"],
        "pv": 20,
        "stats": {
            "attaque": 10,
            "defense": 55,
            "att_spe": 15,
            "def_spe": 20
        },
        "vitesse": 80
    },
    {
        "id": 130,
        "nom": "Léviator",
        "type": ["Eau", "Vol"],
        "pv": 95,
        "stats": {
            "attaque": 125,
            "defense": 79,
            "att_spe": 60,
            "def_spe": 100
        },
        "vitesse": 81
    },
    {
        "id": 131,
        "nom": "Lokhlass",
        "type": ["Eau", "Glace"],
        "pv": 130,
        "stats": {
            "attaque": 85,
            "defense": 80,
            "att_spe": 85,
            "def_spe": 95
        },
        "vitesse": 60
    },
    {
        "id": 132,
        "nom": "Métamorph",
        "type": ["Normal"],
        "pv": 48,
        "stats": {
            "attaque": 48,
            "defense": 48,
            "att_spe": 48,
            "def_spe": 48
        },
        "vitesse": 48
    },
    {
        "id": 133,
        "nom": "Évoli",
        "type": ["Normal"],
        "pv": 55,
        "stats": {
            "attaque": 55,
            "defense": 50,
            "att_spe": 45,
            "def_spe": 65
        },
        "vitesse": 55
    },
    {
        "id": 134,
        "nom": "Aquali",
        "type": ["Eau"],
        "pv": 130,
        "stats": {
            "attaque": 65,
            "defense": 60,
            "att_spe": 110,
            "def_spe": 95
        },
        "vitesse": 65
    },
    {
        "id": 135,
        "nom": "Voltali",
        "type": ["Électrik"],
        "pv": 65,
        "stats": {
            "attaque": 65,
            "defense": 60,
            "att_spe": 110,
            "def_spe": 95
        },
        "vitesse": 130
    },
    {
        "id": 136,
        "nom": "Pyroli",
        "type": ["Feu"],
        "pv": 65,
        "stats": {
            "attaque": 130,
            "defense": 60,
            "att_spe": 95,
            "def_spe": 110
        },
        "vitesse": 65
    },
    {
        "id": 137,
        "nom": "Porygon",
        "type": ["Normal"],
        "pv": 65,
        "stats": {
            "attaque": 60,
            "defense": 70,
            "att_spe": 85,
            "def_spe": 75
        },
        "vitesse": 40
    },
    {
        "id": 138,
        "nom": "Amonita",
        "type": ["Roche", "Eau"],
        "pv": 35,
        "stats": {
            "attaque": 40,
            "defense": 100,
            "att_spe": 90,
            "def_spe": 55
        },
        "vitesse": 35
    },
    {
        "id": 139,
        "nom": "Amonistar",
        "type": ["Roche", "Eau"],
        "pv": 70,
        "stats": {
            "attaque": 60,
            "defense": 125,
            "att_spe": 115,
            "def_spe": 70
        },
        "vitesse": 55
    },
    {
        "id": 140,
        "nom": "Kabuto",
        "type": ["Roche", "Eau"],
        "pv": 30,
        "stats": {
            "attaque": 80,
            "defense": 90,
            "att_spe": 55,
            "def_spe": 45
        },
        "vitesse": 55
    },
    {
        "id": 141,
        "nom": "Kabutops",
        "type": ["Roche", "Eau"],
        "pv": 60,
        "stats": {
            "attaque": 115,
            "defense": 105,
            "att_spe": 65,
            "def_spe": 70
        },
        "vitesse": 80
    },
    {
        "id": 142,
        "nom": "Ptéra",
        "type": ["Roche", "Vol"],
        "pv": 80,
        "stats": {
            "attaque": 105,
            "defense": 65,
            "att_spe": 60,
            "def_spe": 75
        },
        "vitesse": 130
    },
    {
        "id": 143,
        "nom": "Ronflex",
        "type": ["Normal"],
        "pv": 160,
        "stats": {
            "attaque": 110,
            "defense": 65,
            "att_spe": 65,
            "def_spe": 110
        },
        "vitesse": 30
    },
    {
        "id": 144,
        "nom": "Artikodin",
        "type": ["Glace", "Vol"],
        "pv": 90,
        "stats": {
            "attaque": 85,
            "defense": 100,
            "att_spe": 95,
            "def_spe": 125
        },
        "vitesse": 85
    },
    {
        "id": 145,
        "nom": "Électhor",
        "type": ["Électrik", "Vol"],
        "pv": 90,
        "stats": {
            "attaque": 90,
            "defense": 85,
            "att_spe": 125,
            "def_spe": 90
        },
        "vitesse": 100
    },
    {
        "id": 146,
        "nom": "Sulfura",
        "type": ["Feu", "Vol"],
        "pv": 90,
        "stats": {
            "attaque": 100,
            "defense": 90,
            "att_spe": 125,
            "def_spe": 85
        },
        "vitesse": 90
    },
    {
        "id": 147,
        "nom": "Minidraco",
        "type": ["Dragon"],
        "pv": 41,
        "stats": {
            "attaque": 64,
            "defense": 45,
            "att_spe": 50,
            "def_spe": 50
        },
        "vitesse": 50
    },
    {
        "id": 148,
        "nom": "Draco",
        "type": ["Dragon"],
        "pv": 61,
        "stats": {
            "attaque": 84,
            "defense": 65,
            "att_spe": 70,
            "def_spe": 70
        },
        "vitesse": 70
    },
    {
        "id": 149,
        "nom": "Dracolosse",
        "type": ["Dragon", "Vol"],
        "pv": 91,
        "stats": {
            "attaque": 134,
            "defense": 95,
            "att_spe": 100,
            "def_spe": 100
        },
        "vitesse": 80
    },
    {
        "id": 150,
        "nom": "Mewtwo",
        "type": ["Psy"],
        "pv": 106,
        "stats": {
            "attaque": 110,
            "defense": 90,
            "att_spe": 154,
            "def_spe": 90
        },
        "vitesse": 130
    },
    {
        "id": 151,
        "nom": "Mew",
        "type": ["Psy"],
        "pv": 100,
        "stats": {
            "attaque": 100,
            "defense": 100,
            "att_spe": 100,
            "def_spe": 100
        },
        "vitesse": 100
    }
]

export default pokemons
