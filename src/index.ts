// TYPE PROPERTY
type Color = 'Black' | 'White';
type File_x = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank_y = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// REPRESENTS A CHESS GAME
class Game {}

// A SET OF COORDINATES FOR A PIECE
class Position {
    constructor (
        private file: File_x,
        private rank: Rank_y
    ){}
    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// A CHESS PIECE
abstract class Piece{
    protected position: Position;
    constructor (
        private readonly color: Color,
        file: File_x,
        rank: Rank_y
    ){
        this.position = new Position(file, rank)
    }
    moveTo(position: Position) {
        this.position = position;
    }
    abstract canMoveTo(position: Position): boolean
}

// ALL OTHERS
class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

// todo implement class King at page 88