function solution(skill, skill_trees) {
    return skill_trees.filter(s => s.split('')
    .reduce((acc, cur) => (skill.includes(cur) ? [...acc, skill.indexOf(cur)] : acc), [])
    .every((v, i) => v === i)).length;
}