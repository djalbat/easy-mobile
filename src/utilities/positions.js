"use strict";

import { arrayUtilities } from "necessary";

import Position from "../position";

const { clear, filter } = arrayUtilities;

export function sortPositions(positionsA, positionsB) {
  const positionAMap = positionsA.reduce((positionAMap, positionA) => {
    const identifier = positionA.getIdentifier();

    positionAMap[identifier] = positionA;

    return positionAMap;
  }, {});

  clear(positionsA);

  positionsB.forEach((positionB) => {
    const identifier = positionB.getIdentifier(),
          positionA = positionAMap[identifier];

    positionsA.push(positionA);
  });
}

export function matchPositions(positionsA, positionsB) {
  let positionsMatch = false;

  const positionsALength = positionsA.length,
        positionsBLength = positionsB.length;

  if (positionsALength === positionsBLength) {
    const identifiersA = identifiersFromPositions(positionsA),
          identifiersB = identifiersFromPositions(positionsB);

    identifiersA.sort();

    identifiersB.sort();

    const identifiersMatch = identifiersA.every((identifierA, index) => {
      const identifierB = identifiersB[index];

      if (identifierA === identifierB) {
        return true;
      }
    });

    positionsMatch = identifiersMatch;  ///
  }

  return positionsMatch;
}

export function filterPositions(positionsA, positionsB) {
  filter(positionsA, (positionA) => {
    const matches = positionsB.some((positionB) => {
      const matches = positionA.match(positionB);

      if (matches) {
        return true;
      }
    });

    if (!matches) {
      return true;
    }
  });
}

export function positionsFromMouseEvent(mouseEvent) {
  const position = Position.fromMouseEvent(mouseEvent),
        positions = [
          position
        ];

  return positions;
}

export function positionsFromTouchEvent(touchEvent, changed = true) {
  let touchesNodeList;

  if (changed) {
    ({ changedTouches: touchesNodeList } = touchEvent);
  } else {
    ({ touches: touchesNodeList } = touchEvent);
  }

  const touches = [
          ...touchesNodeList
        ],
        positions = touches.map((touch) => {
          const position = Position.fromTouch(touch);

          return position;
        });

  compressPositions(positions);

  return positions;
}

function compressPositions(positions) {
  const positionMap = positions.reduce((positionMap, position) => {
    const identifier = position.getIdentifier();

    positionMap[identifier] = position;

    return positionMap;
  }, {});

  positions = Object.values(positionMap);

  return positions;
}

function identifiersFromPositions(positions) {
  const identifiers = positions.map((position) => {
    const identifier = position.getIdentifier();

    return identifier;
  });

  return identifiers;
}

