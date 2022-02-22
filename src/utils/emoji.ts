export enum NotifyType {
    'SUCCESS' = 'SUCCESS',
    'ERROR' = 'ERROR',
}

export const getRandomIcon = (iconType: NotifyType): string => {
    function getIconListByType(iconType: NotifyType): string[] {
        switch (iconType) {
            case NotifyType.SUCCESS:
                return successIconList
            case NotifyType.ERROR:
                return errorIconList
        }
    }
    function randomIntFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const errorIconList = [
        '⚡',
        '🤕',
        '😰',
        '😓',
        '🙌',
        '😤',
        '😠',
        '💩',
        '👎',
        '🙅‍♂️',
        '🤷‍♂️',
        '🤷‍♀️',
        '🤦‍♀️',
        '🤦‍♂️',
    ]
    const successIconList = [
        '🤩',
        '🥳',
        '😎',
        '🦄',
        '🙌',
        '✌️',
        '🎉',
        '🎊',
        '✅',
    ]
    const iconArray = getIconListByType(iconType)
    return iconArray[randomIntFromInterval(0, iconArray.length - 1)]
}
