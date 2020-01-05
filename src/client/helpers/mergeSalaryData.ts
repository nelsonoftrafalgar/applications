interface ISalaryData {
  [key: string]: number
}

export const mergeSalaryData = (min: ISalaryData[], max: ISalaryData[]) => {
  return min.map((item: ISalaryData, index: number) => {
    return {id: item.id, salary_min: item.salary_min, salary_max: max[index].salary_max}
  })
}
