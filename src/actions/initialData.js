export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boarId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3'],
                    cards: [
                        { id: 'card-1', boarId: 'board-1', columnId: 'column-1', title: 'Tilte of card 1', cover: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/217398019_1209586872846829_8062224018798359500_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XBIv7I9QtUcAX9OCe6r&_nc_ht=scontent.fdad1-3.fna&oh=00_AT9yCZ2i6uELuY-uqHj3zlmz12g4KArNUtzXsivtHHp25A&oe=61DDF7C7' },
                        { id: 'card-2', boarId: 'board-1', columnId: 'column-1', title: 'Tilte of card 2', cover: null },
                        { id: 'card-3', boarId: 'board-1', columnId: 'column-1', title: 'Tilte of card 3', cover: null }
                    ]
                },
                {
                    id: 'column-2',
                    boarId: 'board-1',
                    title: 'Improgress coloumn',
                    cardOrder: ['card-4', 'card-5', 'card-6'],
                    cards: [
                        { id: 'card-4', boarId: 'board-1', columnId: 'column-2', title: 'Tilte of card 4', cover: null },
                        { id: 'card-5', boarId: 'board-1', columnId: 'column-2', title: 'Tilte of card 5', cover: null },
                        { id: 'card-6', boarId: 'board-1', columnId: 'column-2', title: 'Tilte of card 6', cover: null }
                    ]
                },
                {
                    id: 'column-3',
                    boarId: 'board-1',
                    title: 'Done column',
                    cardOrder: ['card-7', 'card-8', 'card-9'],
                    cards: [
                        { id: 'card-7', boarId: 'board-1', columnId: 'column-3', title: 'Tilte of card 7', cover: null },
                        { id: 'card-8', boarId: 'board-1', columnId: 'column-3', title: 'Tilte of card 8', cover: null },
                        { id: 'card-9', boarId: 'board-1', columnId: 'column-3', title: 'Tilte of card 9', cover: null }
                    ]
                }

            ]
        }
    ]
}