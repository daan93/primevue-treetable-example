export const NodeService = {
    getTreeTableNodesData() {
        return [
            {
                key: '1',
                data: {
                    department: 'the-hague/kitchen/chefs',
                    partialChecked: false,
                    checked: false,
                    name: '07:00 — 12:00',
                    size: '€ 96,00',
                    filled: [7,12],
                    image: 'some image',
                    staffCosts: [320, 800],
                    staffHours: [24, 96],
                },
                children: [
                    {
                        key: '1-open',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            name: 'Open shifts',
                            partialChecked: false,
                            checked: false,
                        },
                        children: [
                            {
                                key: '1-open-0',
                                data: {
                                    department: 'the-hague/kitchen/chefs',
                                    partialChecked: false,
                                    checked: false,
                                    name: 'Open',
                                }
                            },
                            {
                                key: '1-open-1',
                                data: {
                                    department: 'the-hague/kitchen/chefs',
                                    partialChecked: false,
                                    checked: false,
                                    name: 'Open',
                                }
                            },
                            {
                                key: '1-open-2',
                                data: {
                                    department: 'the-hague/kitchen/chefs',
                                    partialChecked: false,
                                    checked: false,
                                    name: 'Open',
                                }
                            },
                            {
                                key: '1-open-3',
                                data: {
                                    department: 'the-hague/kitchen/chefs',
                                    partialChecked: false,
                                    checked: false,
                                    name: 'Open',
                                }
                            },
                        ]
                    },
                    {
                        key: '1-0',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Jordyn Calzoni',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Cooper Lipshutz',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '1-2',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Allison Passaquindici',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '1-3',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Maria Donin',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    }
                ]
            },
            {
                key: '2',
                data: {
                    department: 'the-hague/kitchen/chefs',
                    partialChecked: false,
                    checked: false,
                    name: '09:00 — 15:00',
                    size: '€ 96,00',
                    filled: [4, 9],
                    staffCosts: [320, 800],
                    staffHours: [24, 96],
                },
                children: [
                    {
                        key: '2-0',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Jordyn Calzoni',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '2-1',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Cooper Lipshutz',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '2-2',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Allison Passaquindici',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    },
                    {
                        key: '2-3',
                        data: {
                            department: 'the-hague/kitchen/chefs',
                            partialChecked: false,
                            checked: false,
                            name: 'Maria Donin',
                            weekHours: [24, 40],
                            contractHours: [24, 160],
                            contract: 'Fixed',
                            labels: ['Closer', 'ERO', 'Chef'],
                            staffCosts: 32,
                            staffHours: 6,
                        }
                    }
                ]
            },
        ];
    },

    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    },
};
