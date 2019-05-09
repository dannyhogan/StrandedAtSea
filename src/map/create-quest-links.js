function createQuestLink(quest) {
    const link = document.createElement('a');
    const img = document.createElement('img');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    link.style.top = quest.map.top;
    link.style.right = quest.map.right;

    img.src = './assets/' + quest.id + '.png';
    link.append(img);

    return link;
}

export default createQuestLink;