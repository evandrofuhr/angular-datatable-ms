
export type MoveHandler = (event: MouseEvent, dx: number, dy: number, x: number, y: number) => void;
export type UpHandler = (event: MouseEvent, x: number, y: number, moved: boolean) => void;

export function drag(event: MouseEvent, { move: move, up: up }: { move: MoveHandler, up?: UpHandler }) {

    const startX = event.pageX;
    const startY = event.pageY;
    let x = startX;
    let y = startY;
    let moved = false;

    function mouseMoveHandler(mouseEvent: MouseEvent) {
        const dx = mouseEvent.pageX - x;
        const dy = mouseEvent.pageY - y;
        x = mouseEvent.pageX;
        y = mouseEvent.pageY;
        if (dx || dy) { moved = true; }

        move(mouseEvent, dx, dy, x, y);

        mouseEvent.preventDefault(); // to avoid text selection
    }

    function mouseUpHandler(mouseEvent: MouseEvent) {
        x = mouseEvent.pageX;
        y = mouseEvent.pageY;

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        if (up) { up(mouseEvent, x, y, moved); }
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
