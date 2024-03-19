const nameMap = {
    'フェイ': 'Fei',
    '悲しみ': 'Sorrow',
    'アーチ': 'Arch',
    'ホズ': 'Hoz',
    'サー': 'Sar',
    'ジェイデン': 'Jayden'
};

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
