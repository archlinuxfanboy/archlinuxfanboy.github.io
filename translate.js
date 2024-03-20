const nameMap = {
    'フェイ': 'fei',
    '悲しみ': 'sorrow',
    'アーチ': 'arch',
    'ホズ': 'hoz',
    'サー': 'sar',
    'ジェイデン': 'jayden'
};

// list of names (will add rtx when he apologizes to king ecipx)

function handleMouseOver(event) {
    const listItem = event.target;
    const japaneseName = listItem.textContent.trim();
    const englishName = nameMap[japaneseName];
    listItem.dataset.originalName = japaneseName;
    listItem.textContent = englishName;
}

function handleMouseOut(event) {
    const listItem = event.target;
    const originalName = listItem.dataset.originalName;
    listItem.textContent = originalName;
}

const nameItems = document.querySelectorAll('.names-list ul li');
nameItems.forEach(item => {
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('mouseout', handleMouseOut);
});
