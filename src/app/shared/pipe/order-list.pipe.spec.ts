import { OrderListPipe } from './order-list.pipe';
import data from "@app/data/tracks.json";
import { TrackModel } from '@app/core/models/track.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });


  it('🟡👉 Probando I/O valores',()=>{
    const pipe = new OrderListPipe();
    const mockTracks: any = data
    
    const result: TrackModel[] = pipe.transform(mockTracks);

    expect(result).toEqual(mockTracks);
  })

  it('🟡👉 Probando ordenamiento name.Asc',()=>{
    const pipe = new OrderListPipe();
    const mockTracks: any = data.data
    const firtsValue = mockTracks.find((item: TrackModel) => item.idd === 7); // Dark Entries
    const lastsValue = mockTracks.find((item: TrackModel) => item.idd === 6); // T.N.T.

    const result: TrackModel[] = pipe.transform(mockTracks,'name','asc');

    expect(result[0].name).toEqual(firtsValue.name);
    expect(result[8].name).toEqual(lastsValue.name);
  })

  it('🟡👉 Probando ordenamiento name.Desc',()=>{
    const pipe = new OrderListPipe();
    const mockTracks: any = data.data
    const firtsValue = mockTracks.find((item: TrackModel) => item.idd === 7); // Dark Entries
    const lastsValue = mockTracks.find((item: TrackModel) => item.idd === 6); // T.N.T.

    const result: TrackModel[] = pipe.transform(mockTracks,'name','desc');

    expect(result[0].name).toEqual(lastsValue.name);
    expect(result[8].name).toEqual(firtsValue.name);
  })

});
