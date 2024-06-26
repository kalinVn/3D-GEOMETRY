// export const RENDER_ENGINE = '';
export const RENDER_ENGINE = 'PIXI';
export  const MODEL_MIN_X = -2;
export  const MODEL_MAX_X = 2;

export  const MODEL_MIN_Y = -2;
export  const MODEL_MAX_Y = 2;


export const CANVAS_WIDTH   = 1200;
export const CANVAS_HEIGHT  = 800;
export const POINT_CENTER_Y = 400;
export const POINT_CENTER_X = 450;
export const COLOR_AXIS 	= "#FF0000";
export const X_AXIS_ANGLE   = 225;
export const COORD_SYS_SIZE = 250;

export const PADDING_LABEL_AXISES_COORDSYS = 20;

export const CARTESIAN_COORD_SYSTEM = {
    color: "#FF0000",
    axisLength: 160,
    center: {
        x: 500,
        y: 270,
        z: 0
    },
    direction: 'up',
    hand: 'right',
    showLabels: false,
    rotetionMatixAngle: 45
};


export const PARAMS_CUBE = {
    color: "0x00FF00",
    axisLength: 120,
    angle: 30,
    showLabels: true,
    vertices : [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, 1, 1],
        [1, 1, 1],
        [1, -1, 1],
        [-1, -1, 1]
    ],
    linesCoordinates: [
        [
            [-1, -1, -1],
            [1, -1, -1]
        ],

        [
            [1, -1, -1],
            [1, 1, -1]
        ],

        [
            [1, 1, -1],
            [-1, 1, -1]
        ],

        [
            [-1, 1, -1],
            [-1, 1, 1]
        ], 

        [
            [-1, 1, 1],
            [1, 1, 1]
        ],

        [
            [1, 1, 1],
            [1, 1, -1]
        ],

        [
            [1, 1, 1],
            [1, -1, 1]
        ],

        [
            [1, -1, 1],
            [1, -1, -1]
        ],

        [
            [1, -1, 1],
            [-1, -1, 1]
        ],

        [
            [-1, -1, 1],
            [-1, 1, 1]
        ],

        [
            [-1, -1, -1],
            [-1, 1, -1]
        ],

        [
            [-1, -1, -1],
            [-1, -1, 1],
        ]

    ]
}

export const PLANE_PARAMS = {
    rotation: 45,
    v1: {
        x: 600,
        y: 200
    },
    v2: {
        x: 600,
        y: 400
    },
    axisLength: 300
}

export const COORD_SYS_X_ON_TOP = 'X_ON_TOP';
export const COORD_SYS_Z_ON_TOP = 'Z_ON_TOP';
export const COORD_SYS_X_ON_BOTTOM = 'X_ON_BOTTOM';
export const COORD_SYS_Y_ON_TOP = 'Y_ON_TOP';
