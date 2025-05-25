export function getPentagonPositions(radius: number): [number, number, number][] {
    const positions: [number, number, number][] = [];
    const numVertices = 5;
    const angleStep = (2 * Math.PI) / numVertices;

    for (let i = 0; i < numVertices; i++) {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        positions.push([x, 0, z]);
    }

    return positions;
}

export function getPentagonRotations(): [number, number, number][] {
    const rotations: [number, number, number][] = [];
    const numVertices = 5;
    const angleStep = (2 * Math.PI) / numVertices;

    for (let i = 0; i < numVertices; i++) {
        // angle from +X axis for this vertex
        const angle = i * angleStep;
        // add π so the mesh faces back toward the origin
        const rotationY = (3 * Math.PI / 2) - angle;
        rotations.push([0, rotationY, 0]);
    }

    return rotations;
}