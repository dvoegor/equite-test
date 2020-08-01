import {Test, TestingModule} from '@nestjs/testing';
import {DataService} from './data.service';

describe('DataService', () => {
  let service: DataService;
  let firstFileContent: string = 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.\n';
  let secondFileContent: string = 'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.\n';
  let errorMessage = 'No such file';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFileContent', () => {

    //✅ Проходит
    it("should return content of the 'first.txt' file", () => {
      expect(service.getFileContent('first.txt')).toBe(firstFileContent);
    });

    // ✅ Проходит
    it("should return content of the 'second.txt' file", () => {
      expect(service.getFileContent('second.txt')).toBe(secondFileContent);
    });

    // ✅ Проходит
    it("should return error message", () => {
      expect(service.getFileContent('third.txt')).toBe(errorMessage);
    });
  });
});
